import React, { useState } from 'react';
import { addClasses } from '../redux/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import  styled  from 'styled-components'


const initialValues = {
    class_image: "",
    class_type: "",
    duration: "",
    intensity_level: "",
    location: "",
    num_of_attendees: 0,
    start_time: "",
    max_class_size: 0,
}

const StyledForm = styled.form`
display:flex;
flex-direction: column;
padding: 2%;
button{
    width: 20%;
}
label{
    padding:2%;
}
`

// const initialErrValues = {
//     class_id: "",
//     class_image: "",
//     class_type: "",
//     duration: " ",
//     intensity_level: "",
//     location: "",
//     num_of_attendees: "",
//     start_time: " ",
//     max_class_size: "",
//     user_id: ""
// }

function ClassForm(props) {

        const [values, setValues] = useState(initialValues)
        // const [errorValues, setErrorValues] = useState(initialErrValues)
        // const history = useHistory();

        const onChange = (event) => {
            const { name, value } = event.target;
            setValues({ ...values, [name]: value })
        }

        const handleSubmit = e => {
            e.preventDefault();
            const newClass = {...values}
            console.log(newClass)
            props.addClasses(newClass)
        }

    return (
        <div>
                        <h1>Class Form</h1>
            {/* <div className="errors">
                            <div>{errorValues.username}</div>
                            <div>{errorValues.password}</div>
                        </div> */}
            <StyledForm className = 'form container' onSubmit={handleSubmit}>
                {/* <label>Name:
                    <input
                        type = 'text'
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                    />
                </label> */}
                <label>Type:
                    <input
                        type = 'text'
                        value = {values.class_type}
                        onChange = {onChange}
                        name = 'class_type'
                    />
                </label>
                <label>Image:
                    <input
                        type = 'text'
                        value = {values.class_image}
                        onChange = {onChange}
                        name = 'class_image'
                    />
                </label>
                <label>Start Time:
                    <input
                        type = 'text'
                        value = {values.start_time}
                        onChange = {onChange}
                        name = 'start_time'
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
                        value = {values.intensity_level}
                        onChange = {onChange}
                        name = 'intensity_level'
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
                        value = {values.num_of_attendees}
                        onChange = {onChange}
                        name = 'num_of_attendees'
                    />
                </label>
                <label>Max Class Size:
                    <input
                        type = 'number'
                        value = {values.max_class_size}
                        onChange = {onChange}
                        name = 'max_class_size'
                    />
                </label>
                <button>Add Class</button>
            </StyledForm>
        </div>
    )
}

const mapStatesToProps = (state) => {
    const {  errors } = state
    return {
        errors: errors
    }
}

export default connect(mapStatesToProps, { addClasses })(ClassForm)
