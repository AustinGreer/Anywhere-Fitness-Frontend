import React from 'react';
import styled from 'styled-components';


function Class(props) {
    const { name, type, startTime, duration, intensityLevel, attendees, maxClassSize, location} = props.classes
    
    return (
        <StyledCard>
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
            <button>Reserve</button>
        </StyledCard>
    )
}

const StyledCard = styled.section`
    border: 2px solid black;
    width: 40%;
    border-radius: 1rem;
    font-size: 3rem;
    display: flex;
    font-family: sans-serif;

`

export default Class
