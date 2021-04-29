import React, { useState } from 'react';
import { addClasses } from '../redux/actions';
import { connect } from 'react-redux';

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

function ClassForm(props) {

        const [values, setValues] = useState(initialValues)
        // const [errorValues, setErrorValues] = useState(initialErrValues)

        const onChange = (event) => {
            const { name, value } = event.target;
            setValues({ ...values, [name]: value })
        }

        const handleSubmit = e => {
            e.preventDefault();

            const newClass = { 
                ...values, 
                class_id: new Date()
            }
            addClasses(newClass)
        }

    return (
        <div>
                        <h1>Class Form</h1>
            {/* <div className="errors">
                            <div>{errorValues.username}</div>
                            <div>{errorValues.password}</div>
                        </div> */}
            <form className = 'form container' onSubmit={handleSubmit}>
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
                        type = 'number'
                        value = {values.attendees}
                        onChange = {onChange}
                        name = 'attendees'
                    />
                </label>
                <label>Max Class Size:
                    <input
                        type = 'number'
                        value = {values.maxClassSize}
                        onChange = {onChange}
                        name = 'maxClassSize'
                    />
                </label>
                <button>Add Class</button>
            </form>
        </div>
    )
}

const mapStatesToProps = state => {
    return {
        addedClasses: state.addedClasses
    }
}

export default connect(mapStatesToProps, { addClasses })(ClassForm)
