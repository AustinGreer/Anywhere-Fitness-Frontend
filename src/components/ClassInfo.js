import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getClassInfo, deleteClasses } from '../redux';
import deadlift from '../Images/deadlift.jpg';
import { useHistory } from 'react-router-dom'



function ClassInfo(props) {

    const { id } = useParams()
    const { class_img, class_type, duration, intensity_level, location, max_class_size, num_of_attendees, start_time } = props.classes;

    useEffect(() => {
        props.getClassInfo(id)
    }, [])

    const history = useHistory();

    const deleteHandler = () => {
        props.deleteClasses(id)
        setTimeout(() => {
            history.push('/dashboard')
        }, 2000)
    }

    return (
        <StyledContainer>
        <StyledClassInfo>
            {props.loading ? <h1>Loading Class Info...</h1> : ''}
            {class_img ? <StyledImg src={class_img} alt={class_type} /> : <StyledImg src={deadlift} alt='default img' />}
            <div>
                <h3>Type: {class_type}</h3>
                <h3>Duration: {duration}</h3>
                <h3> Intensity Level: {intensity_level}</h3>
                <h3> Location: {location}</h3>
                <h3>Maximum Attendees: {max_class_size}</h3>
                <h3>Current Attendees: {num_of_attendees}</h3>
                <h3>Start Time: {start_time}</h3>
            </div>
        </StyledClassInfo>
        <div className='btn-container'>
            <button className='btn'>Reserve A Spot</button>
            <Link className='btn' to={`/editclass/${id}`}>Edit This Class</Link>
            <button className='btn' onClick={deleteHandler}>Delete This Class</button>
        </div>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5%;

        .btn {
            border: 2px solid white;
            width: 15%;
            margin-right: 3%;
            padding: 1%;
            background: #242943;
            color: white;
            font-size: 1.5rem;
        }
    }
`

const StyledClassInfo = styled.div`
    border: 0.1rem solid white;
    border-radius: 0.5rem;
    width: 90%;
    margin: 5% auto;
    display: flex;
    justify-content: flex-start;

    h3 {
        font-size: 3rem;
        margin: 5% 5% 5% 0;
    }
`

const StyledImg = styled.img`
    width: 50%;
    margin-right: 5%;
    border-radius: 0.5rem;
`

const mapStateToProps = state => {
    return {
        classes: state.classes,
        loading: state.loading,
        isLoggedIn: state.isLoggedIn,
        error: state.error
    }
}

export default connect(mapStateToProps, {getClassInfo, deleteClasses})(ClassInfo)
