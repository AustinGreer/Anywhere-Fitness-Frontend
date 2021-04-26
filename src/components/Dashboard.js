import React from 'react';
import { connect } from 'react-redux';
import Class from './Class'




function Dashboard(props) {
    return (
        <div>
            <h1>Dashboard</h1>
            <input type="text" placeholder="Search Classes"/>
            {props.classes.map(item => <Class name={item.name} />)}
        </div>
    )
}

const mapStateToProps = (state) => {return {classes: state.classes}}

export default connect(mapStateToProps)(Dashboard)
