import React, { useState } from 'react';
import schema from '../validation/LoginSchema';
import * as yup from 'yup';
import styled from 'styled-components';

const MainDiv = styled.div`
background-image: url('https://images.unsplash.com/photo-1603077492340-e6e62b2a688b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
padding:20%;
`

const Title = styled.h1`
font-size: 3rem;
`

const Tags = styled.label`
font-size: 2rem;
color: white;
`

const Container = styled.div`
padding: 7% 25%;
background-color: ${pr => pr.theme.primaryColor};
opacity: 0.9;

`
const Input = styled.input`
width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`

const Button = styled.button`
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
color: white;
background-color: ${pr => pr.theme.secondaryColor};
&: hover {
    opacity: 0.8;
}
`

const initialSignUpValues = {
    username: '',
    password: '',
    code: '',
}

const initialErrorValues = {
    username: '',
    password: '',
    code: '',
}

function SignUp() {
    const [signUpValues, setSetUpValues] = useState(initialSignUpValues)
    const [errorValues, setErrorValues] = useState(initialErrorValues)
    
    const onChange = (event) => {
        const { name, value } = event.target;
        inputChange(name, value);
    }
    
    const inputChange = (name, value) => {

        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setErrorValues({ ...errorValues, [name]: '' })
            })
            .catch((err) => {
                setErrorValues({ ...errorValues, [name]: err.errors[0] })
            })

        setSetUpValues({ ...signUpValues, [name]: value })
    }

    return (
        <MainDiv>
            <Container>
                <Title>Sign Up Today!</Title>
                <div className="errors">
                                <div>{errorValues.username}</div>
                                <div>{errorValues.password}</div>
                            </div>
                <form className = 'form container'>
                    <Tags>Username:
                        <Input 
                            type = 'text'
                            value = {signUpValues.username}
                            onChange = {onChange}
                            name = 'username'
                        />
                    </Tags>
                    <Tags>Password:
                        <Input 
                            type = 'text'
                            value = {signUpValues.password}
                            onChange = {onChange}
                            name = 'password'
                        />
                    </Tags>
                    <Tags>Code (FOR TRAINERS ONLY!):
                        <Input 
                            type = 'text'
                            value = {signUpValues.code}
                            onChange = {onChange}
                            name = 'code'
                        />
                    </Tags>
                    <Button>Sign Up Now!</Button>
                </form>
            </Container>
        </MainDiv>
    )
}

export default SignUp
