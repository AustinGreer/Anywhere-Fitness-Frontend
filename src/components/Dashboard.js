import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import { getClasses } from '../redux'

import Class from './Class';


function Dashboard(props) {
    useEffect(() => {
        props.getClasses()
    }, [])
    
    return (
        <StyledDashBoard>
            <h2>Current Fitness Classes</h2>
            <input type="text" placeholder="Search Classes"/>
            <Link to='/classform'>Add Class</Link>
            <StyledClasses>
                {props.classes.map(item => {
                    return (
                        <Class key={item.class_id} item={item} />
                    )
                })}
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

const mapStateToProps = (state) => {
    return {
        classes: state.classes
    }
}

export default connect(mapStateToProps, { getClasses })(Dashboard)
