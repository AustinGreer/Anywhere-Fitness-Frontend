import React from 'react'


function Class(props) {
    const { name, type, startTime, duration, intensityLevel, attendees, maxClassSize, location} = props.classes
    
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                <li>{type}</li>
                <li>{startTime}</li>
                <li>{duration}</li>
                <li>{intensityLevel}</li>
                <li>{location}</li>
                <li>{attendees}</li>
                <li>{maxClassSize}</li>
            </ul>
            
        </div>
    )
}

export default Class
