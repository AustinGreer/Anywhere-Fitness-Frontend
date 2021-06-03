import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import fitnessImg from '../Images/fitness-travel.jpg';

function Home() {
    return (
        <div>
            <StyledSection>
                <h2>Fitness Can Take Place Anywhere. Why Limit Yourself?</h2>
                <Link to='/login'>Get Started Today</Link>
            </StyledSection>
            <StyledInfo>
                <h2>About Anywhere Fitness</h2>
                <p>These days, fitness classes can be held anywhere - a park, an unfinished basement or a garage - not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.</p>
            </StyledInfo>
        </div>
    )
}

export default Home;

const StyledSection = styled.section`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${fitnessImg});
    width: 100vw;
    height: 90vh;
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
const StyledInfo = styled.section`
    background: #242943;
    color: white;
`