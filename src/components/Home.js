import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../redux/actions';

function Home({ loading, dispatch }) {

    useEffect(() => {
        axios
        .get('https://tt-33-anywhere-fitness.herokuapp.com/api/classes')
        .then(res=>{
            console.log(res.data)
        })
    },[])

    return (
        <div>
            <button onClick={() => dispatch({type: 'GET_CLASSES'})}>Click Me</button>
            {loading ? <h2>Loading...</h2> : <h2>Not Loading</h2>}
        </div>
    )
}

const mapStateToProps = (state) => {return {loading: state.loading}}

export default connect(mapStateToProps)(Home)
