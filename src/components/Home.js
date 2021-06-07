import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import fitnessImg from '../Images/fitness-travel.jpg';

function Home() {
    return (
    
            <StyledSection>
                <h2>Fitness Can Take Place Anywhere. Why Limit Yourself?</h2>
                <Link to='/login'>Get Started Today</Link>
            </StyledSection>
            
        
    )
}

export default Home;

const StyledSection = styled.section`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${fitnessImg});
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        color: white;
        font-size: 2.4rem;
        font-weight: bold;
        width: 50%;
        text-align: center
    }

    a {
        background: #242943 transparent;
        color: white;
        border-radius: 7px;
        border: 2px solid white;
        padding: 1% 1%;
        margin-top: 4%;
    }
`