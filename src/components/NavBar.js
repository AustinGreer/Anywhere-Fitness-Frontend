import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';


function NavBar({isLoggedIn}) {
    return (
        <StyledContainer>
            <h1>Anywhere Fitness</h1>
            <StyledNav>
                <Link to="/">Home</Link>
                { !isLoggedIn && 
                    <Link to="/login">Login</Link>}
                {isLoggedIn ? 
                    <Link to='/signup'>Logout</Link>
                    :
                    <Link to="/signup">Signup</Link>}
                { isLoggedIn && 
                    <Link to="/dashboard">Dashboard</Link>}
            </StyledNav>
        </StyledContainer>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, {})(NavBar)



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
