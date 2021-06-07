import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { logIn } from '../store';
import schema from '../validation/LoginSchema';
import styled from 'styled-components';



function Login({logIn}) {

    const formState = {
        username: '',
        password: ''
    }

    const initialFormErrors = {
        username: '',
        password: ''
    }

    const initialDisabled = true;

    const [form, setForm] = useState(formState);
    const [formError, setFormError] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);


    const { push } = useHistory();

    const inputChange = (name, value) => {

        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setFormError({ ...formError, [name]: '' })
            })
            .catch((err) => {
                setFormError({ ...formError, [name]: err.errors[0] })
            })


        setForm({ ...form, [name]: value })
    }

    useEffect(() => {
        schema.isValid(form)
            .then(valid => setDisabled(!valid))
    }, [form])

    const onChange = (event) => {
        const { name, value } = event.target;
        inputChange(name, value);
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        logIn(form)
        push('/dashboard')
    }

    return (
        <LoginSection>
            <Container>
                <h1>Login Here</h1>
                <form onSubmit={handleLogIn}>
                    <Forms>
                        <div className="errors">
                            <div>{formError.username}</div>
                            <div>{formError.password}</div>
                            <div>{formError.phoneNumber}</div>
                        </div>
                        <Tags>Username</Tags>
                        <Input value={form.username}
                            onChange={onChange}
                            name="username"
                            type="text" />
                    </Forms>
                    <Forms>
                        <Tags>Password</Tags>
                        <Input value={form.password}
                            onChange={onChange}
                            name="password"
                            type="text" />
                    </Forms>
                    <Button disabled={disabled}>Login</Button>
                </form>
            </Container>
        </LoginSection>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, {logIn})(Login)



// styled components
const LoginSection = styled.section`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/assets/javier-santos-guzman-9MR78HGoflw-unsplash.jpg');
    padding:25%;

`

const Tags = styled.div`
font-size: 2rem;
color: white;
`

const Container = styled.div`
    background-color: #242943;
    opacity: 0.9;
    width: 100%;
    padding: 5%;
    border: 2px solid white;


h1 {
    color: white;
    font-size: 3rem;
    text-align: center;
}
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

const Forms = styled.div`

`