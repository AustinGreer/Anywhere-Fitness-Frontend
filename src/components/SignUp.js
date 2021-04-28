import React, { useState } from 'react'
import schema from './LoginSchema';
import * as yup from 'yup';
import styled from 'styled-components';

const MainDiv = styled.div`
background-image: url('https://images.unsplash.com/photo-1603077492340-e6e62b2a688b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
padding:20%;
`

const Tags = styled.div`
font-size: 1.5rem;
font-family:Courier New, monospace;
`

const Container = styled.div`
padding: 5%;
background-color: rgba(209, 208, 206, 0.7);

`
const Input = styled.input`
display: flex;
justify-content: center;
`

const Button = styled.button`
margin: 2%;
padding:0.5%;
font-color: black;
background-color: red;
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
                <h1>Sign Up Page</h1>
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
                    <Tags>Code:
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
