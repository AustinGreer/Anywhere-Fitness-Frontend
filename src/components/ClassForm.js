import React, { useState } from 'react'

const initialValues = {
    name: "",
    type: "",
    startTime: " ",
    duration: " ",
    intensityLevel: "",
    location: "",
    attendees: "",
    maxClassSize: ""
}

// const initialErrValues = {
//     name: "",
//     type: "",
//     startTime: " ",
//     duration: " ",
//     intensityLevel: "",
//     location: "",
//     attendees: "",
//     maxClassSize: ""
// }

function ClassForm() {

        const [values, setValues] = useState(initialValues)
        // const [errorValues, setErrorValues] = useState(initialErrValues)

        const onChange = (event) => {
            const { name, value } = event.target;
            setValues({ ...values, [name]: value })
        }

    return (
        <div>
                        <h1>Class Form</h1>
            {/* <div className="errors">
                            <div>{errorValues.username}</div>
                            <div>{errorValues.password}</div>
                        </div> */}
            <form className = 'form container'>
                <label>Name:
                    <input
                        type = 'text'
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                    />
                </label>
                <label>Type:
                    <input
                        type = 'text'
                        value = {values.type}
                        onChange = {onChange}
                        name = 'type'
                    />
                </label>
                <label>Start Time:
                    <input
                        type = 'text'
                        value = {values.startTime}
                        onChange = {onChange}
                        name = 'startTime'
                    />
                </label>
                <label>Duration:
                    <input
                        type = 'text'
                        value = {values.duration}
                        onChange = {onChange}
                        name = 'duration'
                    />
                </label>
                <label>Intensity Level:
                    <input
                        type = 'text'
                        value = {values.intensityLevel}
                        onChange = {onChange}
                        name = 'intensityLevel'
                    />
                </label>
                <label>Location:
                    <input
                        type = 'text'
                        value = {values.location}
                        onChange = {onChange}
                        name = 'location'
                    />
                </label>
                <label>Attendees:
                    <input
                        type = 'text'
                        value = {values.attendees}
                        onChange = {onChange}
                        name = 'attendees'
                    />
                </label>
                <label>Max Class Size:
                    <input
                        type = 'text'
                        value = {values.maxClassSize}
                        onChange = {onChange}
                        name = 'maxClassSize'
                    />
                </label>
                <button>Sign Up Now!</button>
            </form>
        </div>
    )
}

export default ClassForm
