import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../redux'
import styled from 'styled-components';


function NavBar({isLoggedIn, logOut}) {
    const { push } = useHistory()
    
    const handleLogOut = (e) => {
        window.localStorage.removeItem('token')
        logOut()
        push('/signup')
    }
    
    return (
        <StyledContainer>
            <h1>Anywhere Fitness</h1>
            <StyledNav>
                <Link to="/">Home</Link>
                { !isLoggedIn && 
                    <Link to="/login">Login</Link>}
                {isLoggedIn ? 
                    <Link onClick={handleLogOut}>Log Out</Link>
                    :
                    <Link to="/signup">Sign Up</Link>}
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

export default connect(mapStateToProps, {logOut})(NavBar)



const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 2rem;
    margin-left: 3%;
    margin-right: 3%;
`

const StyledNav = styled.nav`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`
