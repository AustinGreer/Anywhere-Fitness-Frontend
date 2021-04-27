import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>
    )
}

export default NavBar
