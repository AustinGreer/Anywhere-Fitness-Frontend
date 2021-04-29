import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getClassInfo } from '../redux';

function ClassInfo(props) {
    useEffect(() => {
        props.getClassInfo()
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
