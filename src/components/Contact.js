import React from 'react'
import styled from 'styled-components';

const Form = styled.form`
    background-color: ${pr => pr.theme.footerColor};
    color: white;
    padding: 5% 5%;
`
const H2 = styled.h2`
    font-size: 2.3rem;
    color: white;
    padding-bottom: 2%;
`

const Label = styled.label`
    font-size: 1.4rem;
    color: white;
`
const Input = styled.input`
    padding: .5%;
    background-color: ${pr => pr.theme.tertiaryColor};
    border: none;
    color: white;
    margin: 2%;
    width: 30%;
    font-size: 1rem;
`
const InputEmail = styled.input`
    padding: .5%;
    background-color: ${pr => pr.theme.tertiaryColor};
    border: none;
    color: white;
    margin: 2%;
    width: 52%;
    font-size: 1rem;
`
const InputMessage = styled.textarea`
    padding: .5%;
    background-color: ${pr => pr.theme.tertiaryColor};
    border: none;
    box-sizing: border-box;
    color: white;
    width: 100%;
    height: 30vh;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    resize: none;
`

function Contact() {
    return (
        <Form>
            <H2>Contact Us</H2>
            <div>
                <Label>Name
                    <Input
                        type='text'
                        value = {null}
                        onChange={null}
                        name="name"
                        placeholder="Enter your name"
                        maxLength="30"
                    />
                </Label>
                <Label>Email
                    <InputEmail
                        type='text'
                        value = {null}
                        onChange={null}
                        name="email"
                        placeholder="Enter your name"
                    />
                </Label>
                <Label>Message<br></br><br></br>
                    <InputMessage
                        type='text'
                        value = {null}
                        onChange={null}
                        name="message"
                        placeholder="Enter your name"
                    />
                </Label>
            </div>
        </Form>
    )
}

export default Contact