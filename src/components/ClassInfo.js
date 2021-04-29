import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getClassInfo } from '../redux';

function ClassInfo(props) {
    const { id } = useParams()

    useEffect(() => {
        props.getClassInfo(id)
    }, [])

    return (
        <div>
            {props.loading ? <h1>Loading Class Info...</h1> : ''}
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
