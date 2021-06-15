import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../store';
import styled from 'styled-components';


const initialSignUpValues = {
    username: '',
    password: '',
    auth_code: ''
}

function SignUp({addUser}) {
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues)
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignUpValues({ ...signUpValues, [name]: value })
    }
    

    const handleSignUp = (e) => {
        e.preventDefault();
        addUser(signUpValues)
    }

    return (
        <Section>
            <h1>Join Anywhere Fitness and Begin Changing Your Life Today</h1>
            <form onSubmit={handleSignUp}>
                <h2>Sign Up Here</h2>

                <h3>Username</h3>
                <input
                    name='username'
                    type='text'
                    value={signUpValues.username}
                    onChange={handleChange}
                />

                <h3>Password</h3>
                <input
                    name='password'
                    type='text'
                    value={signUpValues.password}
                    onChange={handleChange}
                />

                <h3>Instructor Code</h3>
                <input
                    name='auth_code'
                    type='text'
                    value={signUpValues.auth_code}
                    onChange={handleChange}
                />

                <button>Submit</button>
            </form>
        </Section>
    )
}

export default connect(null, {addUser})(SignUp)

// styled components
const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;

    h1 {
        font-size: 3rem;
        width: 30%;
        text-align: center;
        font-weight: bold;
    }

    form {
        background-color: #242943;
        opacity: 0.9;
        width: 40%;
        padding: 5%;
        height: 85%;
        border-radius: 10px;
        margin-top: 4%;
    }

    h2 {
        color: white;
        font-size: 3rem;
        text-align: center;
    }

    h3 {
        color: white;
        font-size: 2rem;
    }

    input {
        width: 100%;
        padding: 12px 20px;
        margin-bottom: 5%;
        font-size: 1.3rem;
    }

    button {
        font-size: 1.5rem;
        padding: 14px 20px;
        margin-top: 9%;
        cursor: pointer;
        width: 100%;
        color: white;
        background-color: #857db9;

        &: hover {
            opacity: 0.8;   
        }
    }

    @media (max-width: 912px) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.3rem;
            margin-top: 4%;
        }

        input {
            padding: 3%;
        }

        button {
            padding: 3%;
        }
    }
`
