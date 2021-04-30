import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { editClasses } from "../redux/actions";
import { connect } from "react-redux";

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

//   useEffect(() => {
//     axios
//       .get(`https://tt-33-anywhere-fitness.herokuapp.com/api/classes/${id}`)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   });

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
    <form onSubmit={onSubmit}>
      <label>
        Type:
        <input
          type="text"
          value={editClass.class_type}
          onChange={onChange}
          name="class_type"
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={editClass.class_image}
          onChange={onChange}
          name="class_image"
        />
      </label>
      <label>
        Start Time:
        <input
          type="text"
          value={editClass.start_time}
          onChange={onChange}
          name="start_time"
        />
      </label>
      <label>
        Duration:
        <input
          type="text"
          value={editClass.duration}
          onChange={onChange}
          name="duration"
        />
      </label>
      <label>
        Intensity Level:
        <input
          type="text"
          value={editClass.intensity_level}
          onChange={onChange}
          name="intensity_level"
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={editClass.location}
          onChange={onChange}
          name="location"
        />
      </label>
      <label>
        Attendees:
        <input
          type="number"
          value={editClass.num_of_attendees}
          onChange={onChange}
          name="num_of_attendees"
        />
      </label>
      <label>
        Max Class Size:
        <input
          type="number"
          value={editClass.max_class_size}
          onChange={onChange}
          name="max_class_size"
        />
      </label>
      <button>Edit Class</button>
    </form>
  );
}

export default connect(null, {editClasses})(EditClass);
