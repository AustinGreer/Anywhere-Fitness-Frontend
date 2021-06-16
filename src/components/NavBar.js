import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../store'
import styled from 'styled-components';


function NavBar({isLoggedIn, logOut}) {
    const { push } = useHistory()
    
    const handleLogOut = (e) => {
        window.localStorage.removeItem('token')
        logOut()
        push('/login')
    }
    
    return (
        <StyledContainer>
            <Link to='/'>Anywhere Fitness</Link>
            <StyledNav>
                <Link to="/">Home</Link>
                { !isLoggedIn && 
                    <Link to="/login">Login</Link>}
                {isLoggedIn ? 
                    <Link onClick={handleLogOut} to='/login'>Log Out</Link>
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


// styled components
const StyledContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 1.7rem;
    background: #242943;
    color: white;
    width: 100%;
    padding-bottom: 1%;

    a {
        margin-left: 3%;
        height: 8vh;
    }
`

const StyledNav = styled.nav`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin-right: 4%;
`
