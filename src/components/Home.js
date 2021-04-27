import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../redux/actions';
import styled from 'styled-components'
import weights from '../Images/weights.jpg'
import lifting from '../Images/lifting.jpg'
import deadlift from '../Images/deadlift.jpg'


function Home({ loading, dispatch }) {

    const TopContainer = styled.div`
        color: white;
        background-color: black;
    `

    useEffect(() => {
        axios
        .get('https://tt-33-anywhere-fitness.herokuapp.com/api/classes')
        .then(res=>{
            console.log(res.data)
        })
    },[])

    return (
            <div>
                <div>
                    <button onClick={() => dispatch({type: 'GET_CLASSES'})}>Click Me</button>
                    {loading ? <h2>Loading...</h2> : <h2>Not Loading</h2>}
                </div>
                <TopContainer>
                    <h1>Anywhere Fitness</h1>
                    <p>THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE- A PARK, AN UNFINISHED BASEMENT OR A GARAGE- NOT JUST AT A TRADITIONAL GYM. CERTIFIED FITNESS INSTRUCTORS NEED AN EASY WAY TO TAKE THE AWKWARDNESS OUT OF ATTENDANCE TAKING AND CLIENT PAYMENT PROCESSING.</p>
                    <button>Learn More</button>
                    
                </TopContainer>
                <div>
                    <h2>Below this is a big paragraph</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare accumsan orci, eu molestie dui dignissim vitae. Donec luctus est vitae ligula eleifend, eu tincidunt magna dapibus. Maecenas non imperdiet purus. Praesent pharetra maximus interdum. Fusce vitae felis pulvinar, iaculis odio at, rhoncus augue.</p>
                </div>
                <div>
                    <div>
                        <h3>An h3 hehe</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare accumsan orci, eu molestie dui dignissim vitae. Donec luctus est vitae ligula eleifend, eu tincidunt magna dapibus. Maecenas non imperdiet purus. Praesent pharetra maximus interdum. Fusce vitae felis pulvinar, iaculis odio at, rhoncus augue.</p>
                    </div>
                    <div>
                        <img src = {weights} alt = 'Your journey begins here'/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src = {deadlift} alt = 'Exercise'/>
                    </div>
                    <div>
                        <h3>An h3 hehe</h3>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>An h3 hehe</h3>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                    </div>
                    <div>
                        <img src = {lifting} alt = 'Lifting'/>
                    </div>
                </div>
                <div>
                    <h2>WOAH an h2???? Again.. crazy.</h2>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                    <button>Get Started</button>
                </div>
                <footer>
                </footer>
            </div>  
    )
}



const mapStateToProps = (state) => {return {loading: state.loading}}

export default connect(mapStateToProps)(Home)
