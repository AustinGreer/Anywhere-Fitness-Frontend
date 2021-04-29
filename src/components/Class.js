import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import deadlift from '../Images/deadlift.jpg';



function Class(props) {

    const {class_image, class_type, location, start_time, class_id} = props.item;

    return (
        <StyledCard>
            { class_image ? <StyledImg src={class_image} /> : <StyledImg src={deadlift} />}
            <h3>Type: {class_type}</h3>
            <h3>Location: {location}</h3>
            <h3>Start Time: {start_time}</h3>
            <StyledAnchor to={`/class/${class_id}`}>
                More Info
            </StyledAnchor>
        </StyledCard>
    )
}

const StyledCard = styled.section`
    width: 40%;
    border-radius: 1rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5%;
    font-family: sans-serif;
    border: 0.1rem solid white;

    h3 {
        margin-bottom: 3%;
    }
`

const StyledImg = styled.img`
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 3%;
`

const StyledAnchor = styled(Link)`
    border: 0.2px solid white;
    border-radius: 0.5rem;
    margin-bottom: 5%;
`

export default Class;