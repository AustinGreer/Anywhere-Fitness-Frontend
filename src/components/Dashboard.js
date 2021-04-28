import React from 'react';
import { connect } from 'react-redux';
import Class from './Class';
import styled from 'styled-components';




function Dashboard(props) {
    return (
        <StyledDashBoard>
            <h2>Current Fitness Classes</h2>
            <input type="text" placeholder="Search Classes"/>
            <StyledClasses>
            {props.classes.map((item,index) => (
                    <Class key={index}classes={item}/>
                    ))}
            </StyledClasses>
        </StyledDashBoard>
    )
}

const StyledDashBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4%;

    h2 {
        font-size: 4rem;
        margin-bottom: 3%;
    }
`


const StyledClasses = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    row-wrap: wrap;
    width: 100%;
`

const mapStateToProps = (state) => {return {classes: state.classes}}

export default connect(mapStateToProps)(Dashboard)
