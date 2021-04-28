import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function NavBar() {
    return (
        <StyledContainer>
            <h1>Anywhere Fitness</h1>
            <StyledNav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/dashboard">Dashboard</Link>
            </StyledNav>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 2rem;
`

const StyledNav = styled.nav`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`


export default NavBar
