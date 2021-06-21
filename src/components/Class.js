import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import deadlift from '../Images/deadlift.jpg';



function Class(props) {

    const {class_image, class_type, location, start_time, class_id} = props.item;

    return (
        <StyledClass>
            { class_image ? 
            <img src={class_image} alt='class img' /> : 
            <img src={deadlift} alt="default img" />}
            <div className='text-container'>
                <h3>Type: {class_type}</h3>
                <h3>Location: {location}</h3>
                <h3>Start Time: {start_time}</h3>
                <Link to={`/class/${class_id}`}>
                    More Info
                </Link>
            </div>
        </StyledClass>
    )
}

const StyledClass = styled.div`
    width: 100%;
    font-size: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 3%;
    font-family: sans-serif;
    border-bottom: 0.2rem solid #242943;

    img {
        width: 30%;
        border-radius: 1rem;
        margin-top: 3%;
        margin-left: 3%;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        width: 60%;
        justify-content: center;
        align-items: center;
    }

    h3 {
        margin-bottom: 3%;
    }

    a {
        border-radius: 0.5rem;
        width: 30%;
        text-align: center;
        background: #242943;
        opacity: 0.9;
        color: white;
        padding: 1%;
        margin-top: 3%;

        &: hover {
            opacity: 0.8;
        }
    }
`

export default Class;