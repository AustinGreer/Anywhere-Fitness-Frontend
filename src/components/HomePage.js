import React from 'react';
import styled from 'styled-components';
import fitnessImg from '../Images/fitness-travel.jpg'

function HomePage() {
    return (
        <div>
            <StyledSection>
                <h2>Fitness Can Take Place Anywhere. Why Limit Yourself?</h2>
                <a>Get Started Today</a>
            </StyledSection>
        </div>
    )
}

export default HomePage;

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
        color: #FAF0E6;
        font-size: 2.4rem;
        width: 50%;
        text-align: center
    }

    a {
        background: #242943;
        color: #FAF0E6;
        border-radius: 7px;
        border: 2px solid white;
        padding: 1% 1%;
        margin-top: 4%;
    }
`
