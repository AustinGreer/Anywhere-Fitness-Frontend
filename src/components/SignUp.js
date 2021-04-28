import React, { useState } from 'react'
import schema from '../validation/LoginSchema';
import * as yup from 'yup';

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
        <div>
            <h1>Sign Up Page</h1>
            <div className="errors">
                            <div>{errorValues.username}</div>
                            <div>{errorValues.password}</div>
                        </div>
            <form className = 'form container'>
                <label>Username:
                    <input
                        type = 'text'
                        value = {signUpValues.username}
                        onChange = {onChange}
                        name = 'username'
                    />
                </label>
                <label>Password:
                    <input
                        type = 'text'
                        value = {signUpValues.password}
                        onChange = {onChange}
                        name = 'password'
                    />
                </label>
                <label>Code:
                    <input
                        type = 'text'
                        value = {signUpValues.code}
                        onChange = {onChange}
                        name = 'code'
                    />
                </label>
                <button>Sign Up Now!</button>
            </form>
        </div>
    )
}

export default SignUp
