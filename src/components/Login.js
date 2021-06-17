import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../store';
import styled from 'styled-components';



function Login({logIn, isLoggedIn, loading}) {

    const formState = {
        username: '',
        password: ''
    }

    const [form, setForm] = useState(formState);


    const history = useHistory();

    const inputChange = (name, value) => {

        setForm({ ...form, [name]: value })
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        inputChange(name, value);
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        logIn(form)

        setTimeout(() => {
            isLoggedIn && history.push('/dashboard')
        }, 2000)
        
    }

    return (
        <Section>
            <h1>Take Control of Your Fitness Goals Today</h1>
            <FormContainer>
                <h2>Login Here</h2>
                <form onSubmit={handleLogIn}>
                    <Forms>
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
                    <Button>Login</Button>
                </form>
            </FormContainer>
        </Section>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {logIn})(Login)



// styled components
const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid black;
    width: 100vw;
    height: 100vh;

    h1 {
        font-size: 3.5rem;
        width: 25%;
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