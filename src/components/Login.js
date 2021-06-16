import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { logIn } from '../store';
import schema from '../validation/LoginSchema';
import styled from 'styled-components';
import axios from 'axios';



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
        axios.get("https://tt-33-anywhere-fitness.herokuapp.com/api/users")
        logIn(form)
        push('/dashboard')
    }

    return (
        <Section>
            <h1>Take Control of Your Fitness Goals Today</h1>
            <FormContainer>
                <h2>Login Here</h2>
                <form onSubmit={handleLogIn}>
                    <Forms>
                        <div className="errors">
                            <div>{formError.username}</div>
                            <div>{formError.password}</div>
                            <div>{formError.phoneNumber}</div>
                        </div>
                        <h3>Username</h3>
                        <Input value={form.username}
                            onChange={onChange}
                            name="username"
                            type="text" />
                    </Forms>
                    <Forms>
                        <h3>Password</h3>
                        <Input value={form.password}
                            onChange={onChange}
                            name="password"
                            type="password" />
                    </Forms>
                    <Button disabled={disabled}>Login</Button>
                </form>
            </FormContainer>
        </Section>
    )
}



export default connect(null, {logIn})(Login)



// styled components
const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid black;
    width: 100vw;
    height: 100vh;

    h1 {
        font-size: 4rem;
        width: 30%;
        text-align: center;
        font-weight: bold;
    }

`


const FormContainer = styled.div`
    background-color: #242943;
    opacity: 0.9;
    width: 40%;
    padding: 5%;
    border-radius: 10px;
    margin-top: 5%;


h2 {
    color: white;
    font-size: 3rem;
    text-align: center;
}
`
const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin-bottom: 5%;
    font-size: 1.3rem;
`

const Button = styled.button`
    font-size: 1.5rem;
    padding: 14px 20px;
    margin-top: 7%;
    cursor: pointer;
    width: 100%;
    color: white;
    background-color: #857db9;

    &: hover {
        opacity: 0.8;   
    }
`

const Forms = styled.div`
    h3 {
        color: white;
        font-size: 2rem;
    }
`