import React from 'react'

function Class(props) {
    return (
        <div>
            <h1>{props.classes.name}</h1>
            <p>{props.classes.type}</p>
            <p>{props.classes.startTime}</p>
            <p>{props.classes.duration}</p>
            <p>{props.classes.intensityLevel}</p>
            <p>{props.classes.location}</p>
            <p>{props.classes.attendees}</p>
            <p>{props.classes.maxClassSize}</p>
        </div>
    )
}

export default Class
