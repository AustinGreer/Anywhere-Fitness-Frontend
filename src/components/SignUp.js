import React, { useState } from 'react'

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
    
    function onChange(evt) {
        const { name, value } = evt.target
        setSetUpValues({
            ...signUpValues,
            [name]: value
        })
    }
    
    
    return (
        <div>
            <h1>Sign Up Component</h1>
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
