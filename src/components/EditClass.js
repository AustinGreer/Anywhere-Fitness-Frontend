import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { editClasses } from "../store/actions";
import { connect } from "react-redux";
import styled from 'styled-components';

function EditClass(props) {
  const { id } = useParams();
  const history = useHistory();
  const [editClass, setEditClass] = useState({
    class_image: "",
    class_type: "",
    duration: "",
    intensity_level: "",
    location: "",
    num_of_attendees: 0,
    start_time: "",
    max_class_size: 0,
  });

  const onChange = (e) => {
    setEditClass({
      ...editClass,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.editClasses(id, editClass);
    history.push("/classes");
  };

  return (
    <StyledEditClass>
      <h1>Edit Your Class</h1>
      <form onSubmit={onSubmit}>
        <label>
          Type: <br />
          <input
            type="text"
            value={editClass.class_type}
            onChange={onChange}
            name="class_type"
          />
        </label>
        <label>
          Image: <br />
          <input
            type="text"
            value={editClass.class_image}
            onChange={onChange}
            name="class_image"
          />
        </label>
        <label>
          Start Time: <br />
          <input
            type="text"
            value={editClass.start_time}
            onChange={onChange}
            name="start_time"
          />
        </label>
        <label>
          Duration: <br />
          <input
            type="text"
            value={editClass.duration}
            onChange={onChange}
            name="duration"
          />
        </label>
        <label>
          Intensity Level: <br />
          <input
            type="text"
            value={editClass.intensity_level}
            onChange={onChange}
            name="intensity_level"
          />
        </label>
        <label>
          Location: <br />
          <input
            type="text"
            value={editClass.location}
            onChange={onChange}
            name="location"
          />
        </label>
        <label>
          Attendees: <br />
          <input
            type="number"
            value={editClass.num_of_attendees}
            onChange={onChange}
            name="num_of_attendees"
          />
        </label>
        <label>
          Max Class Size: <br />
          <input
            type="number"
            value={editClass.max_class_size}
            onChange={onChange}
            name="max_class_size"
          />
        </label>
        <button>Edit Class</button>
      </form>
    </StyledEditClass>
  );
}

export default connect(null, {editClasses})(EditClass);

const StyledEditClass = styled.section`
  padding: 10%;
  background: #525673;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color:#EBEEFF;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 5%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    label {
      font-size: 1.5rem;
      color: #EBEEFF;
      margin-bottom: 3%;
      text-align: center;
      width: 40%;
    }

    input {
      width: 70%;
    }

    button {
      background: #AC5975;
      color: #EAECFF;
      font-size: 1.3rem;
      padding: 10px 20px;
      width: 18%;
      border-radius: 10px;
      border-color: #6F5C82;
      cursor: pointer;

      :hover {
        background: #E67E6F;
      }
    }
  }
`
