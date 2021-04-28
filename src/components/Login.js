import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'
import schema from '../validation/LoginSchema'
import styled from 'styled-components'

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

function Login(props) {

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


    const history = useHistory();

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

    const formSubmit = (e) => {
        e.preventDefault();

        axios.post('https://tt-33-anywhere-fitness.herokuapp.com/api/login', form)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                props.login(res.data.data.user_id);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        schema.isValid(form)
            .then(valid => setDisabled(!valid))
    }, [form])

    const onChange = (event) => {
        const { name, value } = event.target;
        inputChange(name, value);
    }

    return (
        <MainDiv>
            <Container>
                <div onSubmit={formSubmit}>
                    <div className="forms">
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
                    </div>
                    <div className="forms">
                        <Tags>Password</Tags>
                        <Input value={form.password}
                            onChange={onChange}
                            name="password"
                            type="text" />
                    </div>
                    <Button disabled={disabled}>Login</Button>
                </div>
            </Container>
        </MainDiv>
    )
}

export default Login
