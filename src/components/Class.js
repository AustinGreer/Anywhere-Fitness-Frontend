import React from 'react';
import styled from 'styled-components';


function Class(props) {
    const {class_image, class_type, location, start_time} = props.item;
    
    return (
        <StyledCard>
            <img src={class_image} />
            <h3>Type: {class_type}</h3>
            <h3>Location: {location}</h3>
            <h3>Start Time: {start_time}</h3>
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
