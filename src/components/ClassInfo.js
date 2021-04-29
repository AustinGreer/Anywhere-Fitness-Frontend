import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getClassInfo } from '../redux';
import deadlift from '../Images/deadlift.jpg';


function ClassInfo(props) {
    const { id } = useParams()
    const { class_img, class_type, duration, intensity_level, location, max_class_size, num_of_attendees, start_time } = props.classes;

    useEffect(() => {
        props.getClassInfo(id)
    }, [])

    return (
        <div>
            {props.loading ? <h1>Loading Class Info...</h1> : ''}
            {class_img ? <img src={class_img} alt={class_type} /> : <img src={deadlift} alt='default img' />}
            <div>
                <h3>Type: {class_type}</h3>
                <h3>Duration: {duration}</h3>
                <h3> Intensity Level: {intensity_level}</h3>
                <h3> Location: {location}</h3>
                <h3>Maximum Attendees: {max_class_size}</h3>
                <h3>Current Attendees: {num_of_attendees}</h3>
                <h3>Start Time: {start_time}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        loading: state.loading,
        isLoggedIn: state.isLoggedIn,
        error: state.error
    }
}

export default connect(mapStateToProps, {getClassInfo})(ClassInfo)
