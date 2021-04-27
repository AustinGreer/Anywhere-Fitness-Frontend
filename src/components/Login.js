import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'
import schema from './LoginSchema'

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

        axios.post('', form)
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
        <div>
            <div className="login">
                <div onSubmit={formSubmit}>
                    <div className="forms">
                        <div className="errors">
                            <div>{formError.username}</div>
                            <div>{formError.password}</div>
                            <div>{formError.phoneNumber}</div>
                        </div>
                        <label>Username</label>
                        <input value={form.username}
                            onChange={onChange}
                            name="username"
                            type="text" />
                    </div>
                    <div className="forms">
                        <label>Password</label>
                        <input value={form.password}
                            onChange={onChange}
                            name="password"
                            type="text" />
                    </div>
                    <button disabled={disabled}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
