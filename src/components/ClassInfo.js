import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getClassInfo, deleteClasses } from '../store';
import deadlift from '../Images/deadlift.jpg';
import { useHistory } from 'react-router-dom'



function ClassInfo(props) {

    const { id } = useParams()
    const { class_img, class_type, duration, intensity_level, location, max_class_size, num_of_attendees, start_time, loading } = props.classes;

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
        <StyledClassInfo>
                {loading && <h2>Loading...</h2>}
                <div className="info-container">
                    {class_img ? <img src={class_img} alt="class img" /> 
                        : <img src={deadlift} alt="default img" />}
                        <h1>{class_type}</h1>
                        <ul>
                            <li>Duration: {duration}</li>
                            <li>Intensity Level: {intensity_level}</li>
                            <li>Location: {location}</li>
                            <li>Start Time: {start_time}</li>
                            <li>Current Number of Attendees: {num_of_attendees}</li>
                            <li>Max Number of Attendees: {max_class_size}</li>
                        </ul>
                        <div className="btn-container">
                            <button className='btn'>Reserve A Spot</button>
                            {props.currentUser.auth_code && <Link className='btn' to={`/editclass/${id}`}>Edit This Class</Link>}
                            {props.currentUser.auth_code && <button className='btn' onClick={deleteHandler}>Delete This Class</button>}
                        </div>
                </div>

            
        </StyledClassInfo>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        currentUser: state.currentUser,
        loading: state.loading,
        isLoggedIn: state.isLoggedIn,
        error: state.error
    }
}

export default connect(mapStateToProps, {getClassInfo, deleteClasses})(ClassInfo)


const StyledClassInfo = styled.section`
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #787B9A;
    width: 100%;
    height: 100%;

    .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        border-radius: 10px;
        background: #2D324C;
        color: #EAECFF;
        margin-bottom: 7%;

        img {
            width: 60%;
            height: 50%;
            border-radius: 10px;
            margin-top: 5%;
            margin-bottom: 5%;
        }

        h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 3%;
        }

        ul {
            margin-bottom: 5%;
        }

        
        li {
            font-size: 1.8rem;
            text-align: center;
            margin-bottom: 3%;
        }

        .btn-container {
            margin-bottom: 5%;
            display: flex;
            width: 90%;
            justify-content: space-evenly;

            button {
                background: #6F5C82;
                color: #EAECFF;
                font-size: 1.3rem;
                padding: 2%;
                width: 30%;
                border-radius: 10px;
                border-color: #6F5C82;
                cursor: pointer;
            }

            a {
                background: #6F5C82;
                color: #EAECFF;
                font-size: 1.3rem;
                width: 30%;
                border-radius: 10px;
                text-align: center;
            }
        }
    }

`
