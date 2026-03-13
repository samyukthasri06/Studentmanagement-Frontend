import { useState } from "react";
import "./StudentRegForm.css";

export default function StudentRegForm() {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
  const [rollno, setRollno] = useState("");
  const [regno, setRegno] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    let obj = {
      Name: name,
      Course: course,
      Duration: duration,
      RegisterNo: regno,
      RollNo: rollno
    };

    console.log(obj);
  }

  return (
    <div className="form-container">

      <h2>Student Registration</h2>

      <form onSubmit={handleFormSubmit}>

        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={handleNameChange}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <input
          type="text"
          placeholder="Register No"
          value={regno}
          onChange={(e) => setRegno(e.target.value)}
        />

        <input
          type="text"
          placeholder="Roll No"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />

        <button type="submit">Submit</button>

      </form>

      <div className="preview">
        <p>Name: {name}</p>
        <p>Course: {course}</p>
        <p>Duration: {duration}</p>
        <p>Register No: {regno}</p>
        <p>Roll No: {rollno}</p>
      </div>

    </div>
  );
}
