import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getClasses } from "../store";
import Class from "./Class";

function Dashboard(props) {
  useEffect(() => {
    props.getClasses();
  }, []);

  return (
    <StyledDashBoard>
      <h2>Current Fitness Classes</h2>
      { props.currentUser.auth_code && <Link to="/classform" className='add-class'>Add Class</Link>}
      <StyledClasses>
        {props.loading && <h2>Loading Classes...</h2>}

        {props.classes.map &&
          props.classes.map((item) => {
            return <Class key={item.class_id} item={item} />;
          })}

        {props.errors && <h2>{props.errors}</h2>}
      </StyledClasses>
    </StyledDashBoard>
  );
}


const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    loading: state.loading,
    errors: state.errors,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { getClasses })(Dashboard);

const StyledDashBoard = styled.section`
  color: #242943;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;

  h2 {
    font-size: 4rem;
  }

  .add-class{
        border-radius: 0.5rem;
        width: 10%;
        text-align: center;
        background: #242943;
        opacity: 0.9;
        color: white;
        padding: 1%;
        margin-top: 2%;
        margin-bottom: 3%;

        &: hover {
            opacity: 0.8;
        }
  }
`;


const StyledClasses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-wrap: wrap;
  width: 95%;
  border-top: 0.2rem solid #242943;
  margin-bottom: 2%;

`