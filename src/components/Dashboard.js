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
      { props.currentUser.auth_code && <StyledLink to="/classform">Add Class</StyledLink>}
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
    margin-bottom: 5%;
  }
`;

const StyledLink = styled(Link)`
  border: 0.15rem solid white;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  margin-top: 2%;
  margin-bottom: 3%;
  padding: 1%;
`;

const StyledClasses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-wrap: wrap;
  width: 95%;
  border-top: 0.2rem dashed #242943;
  margin-bottom: 2%;

`