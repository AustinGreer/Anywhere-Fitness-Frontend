import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../redux/actions';
import styled from 'styled-components'
import weights from '../Images/weights.jpg'
import lifting from '../Images/lifting.jpg'
import deadlift from '../Images/deadlift.jpg'
import Contact from './Contact.js'


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
                <TopContainer>
                    <H1>Anywhere Fitness</H1>
                    <TopParagraph>These days, fitness classes can be held anywhere - a park, an unfinished basement or a garage - not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.</TopParagraph>
                    <Button href = '#Learn'>Learn More</Button>
                    
                </TopContainer>
                <MidContainer id = 'Learn'>
                    <H2>Below this is a big paragraph</H2>
                    <MidParagraph>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</MidParagraph>
                </MidContainer>
                <BodyPictureContainer1>
                    <BodyTextContainer>
                        <H3>Sed amet aliquam</H3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare accumsan orci, eu molestie dui dignissim vitae. Donec luctus est vitae ligula eleifend, eu tincidunt magna dapibus. Maecenas non imperdiet purus. Praesent pharetra maximus interdum. Fusce vitae felis pulvinar, iaculis odio at, rhoncus augue.</p>
                    </BodyTextContainer>
                    <Image src = {weights} alt = 'Your journey begins here'/>
                </BodyPictureContainer1>
                <BodyPictureContainer>
                    <Image src = {deadlift} alt = 'Exercise'/>
                    <BodyTextContainer>
                        <H3>Sed amet aliquam</H3>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                    </BodyTextContainer>
                </BodyPictureContainer>
                <BodyPictureContainer1>
                    <BodyTextContainer>
                        <H3>Sed amet aliquam</H3>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                    </BodyTextContainer>
                    <Image src = {lifting} alt = 'Lifting'/>
                </BodyPictureContainer1>
                <MidContainer>
                    <H2>Woah an h2???? Again?.. crazy.</H2>
                    <TopParagraph>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</TopParagraph>
                    <Button href = '/signup'>Get Started</Button>
                </MidContainer>
                <footer>
                    <div>
                        <Contact />
                    </div>
                    <div className = 'logos'>

                    </div>
                </footer>
            </div>  
    )
}

const mapStateToProps = (state) => {return {loading: state.loading}}

const TopContainer = styled.div`
        background-color: ${pr => pr.theme.primaryColor};
        color: white;
        padding: 10% 5%;
    `
    const TopParagraph = styled.p`
        padding: 3% 0% 3%;
        font-size: 1.3rem;
        border-top: 2px white solid;
    `
    const Button = styled.a`
        padding: 1% 1%;
        color: white;
        font-size: .9rem;
        background-color: transparent;
        border: 3px white solid;
        &:hover {
            color: ${pr => pr.theme.hover};
            border: 3px ${pr => pr.theme.hover} solid;
            transition: .5s;
        }
    `
    const MidContainer = styled.div`
        background-color: ${pr => pr.theme.secondaryColor};
        color: white;
        padding: 8% 5%;
    `
    const MidParagraph = styled.p`
        padding: 2% 0% 0%;
        font-size: 1.3rem;
    `
    const BodyPictureContainer = styled.div`
        display: flex;
        justify-content: space-around;
        background-color: ${pr => pr.theme.fourthColor};
        color: white;
        align-items:center;
    `
    const BodyTextContainer = styled.div`
        width: 70%;
        padding: 0% 5%;
        
    `
    const BodyPictureContainer1 = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: ${pr => pr.theme.tertiaryColor};
        align-items:center;
        color: white;
    `
    const Image = styled.img`
        width: 30%;
    `
    const H1 = styled.h1`
        font-size: 3.3rem;
        padding-bottom: 3%;
    `
    const H2 = styled.h2`
        font-size: 2.8rem;
        padding-bottom: 2%;
        border-bottom: 1px white solid;
    `
    const H3 = styled.h3`
        font-size: 2.2rem;
        margin-bottom: 2%;
    `

export default connect(mapStateToProps)(Home)