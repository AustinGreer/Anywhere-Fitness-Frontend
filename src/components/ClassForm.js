import React, { useState } from "react";
import { addClasses } from "../store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const initialValues = {
  class_image: "",
  class_type: "",
  duration: "",
  intensity_level: "",
  location: "",
  num_of_attendees: 0,
  start_time: "",
  max_class_size: 0,
};

function ClassForm(props) {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClass = { ...values };
    console.log(newClass);
    props.addClasses(newClass);
    setTimeout(() => {
      history.push("/dashboard");
    }, 3000);
  };

  return (
    <StyledAddClass>
      <h1>Add a New Class</h1>
      <form className="form container" onSubmit={handleSubmit}>
        <label>
          Type: <br />
          <input
            type="text"
            value={values.class_type}
            onChange={onChange}
            name="class_type"
          />
        </label>
        <label>
          Image: <br />
          <input
            type="text"
            value={values.class_image}
            onChange={onChange}
            name="class_image"
          />
        </label>
        <label>
          Start Time: <br />
          <input
            type="text"
            value={values.start_time}
            onChange={onChange}
            name="start_time"
          />
        </label>
        <label>
          Duration: <br />
          <input
            type="text"
            value={values.duration}
            onChange={onChange}
            name="duration"
          />
        </label>
        <label>
          Intensity Level: <br />
          <input
            type="text"
            value={values.intensity_level}
            onChange={onChange}
            name="intensity_level"
          />
        </label>
        <label>
          Location: <br />
          <input
            type="text"
            value={values.location}
            onChange={onChange}
            name="location"
          />
        </label>
        <label>
          Attendees: <br />
          <input
            type="number"
            value={values.num_of_attendees}
            onChange={onChange}
            name="num_of_attendees"
          />
        </label>
        <label>
          Max Class Size: <br />
          <input
            type="number"
            value={values.max_class_size}
            onChange={onChange}
            name="max_class_size"
          />
        </label>
        <button>Add Class</button>
      </form>
    </StyledAddClass>
  );
}

const mapStatesToProps = (state) => {
  const { errors } = state;
  return {
    errors: errors,
  };
};

export default connect(mapStatesToProps, { addClasses })(ClassForm);

const StyledAddClass = styled.section`
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
