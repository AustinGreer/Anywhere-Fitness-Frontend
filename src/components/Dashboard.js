import React from 'react';
import { connect } from 'react-redux';
import Class from './Class';
import styled from 'styled-components';




function Dashboard(props) {
    return (
        <div>
            <h1>Dashboard</h1>
            <input type="text" placeholder="Search Classes"/>
            <StyledClasses>
            {props.classes.map((item,index) => (
                    <Class key={index}classes={item}/>
                    ))}
            </StyledClasses>
        </div>
    )
}

const StyledClasses = styled.div`
    background: #242943;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    row-wrap: wrap;
    width: 100%;
`

const mapStateToProps = (state) => {return {classes: state.classes}}

export default connect(mapStateToProps)(Dashboard)
