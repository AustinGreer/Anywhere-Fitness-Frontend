import React from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../redux/actions'

function Home({ loading, dispatch }) {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => dispatch({type: 'GET_CLASSES'})}>Click Me</button>
            {loading ? <h2>Loading...</h2> : <h2>Not Loading</h2>}
        </div>
    )
}

const mapStateToProps = (state) => {return {loading: state.loading}}

export default connect(mapStateToProps)(Home)
