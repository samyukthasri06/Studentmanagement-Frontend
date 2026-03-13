import { useState } from "react";
import "./StaffRegForm.css";

export default function StaffRegForm(){

const [name,setName]=useState("");
const [department,setDepartment]=useState("");
const [staffid,setStaffid]=useState("");
const [designation,setDesignation]=useState("");
const [experience,setExperience]=useState("");

function handleSubmit(e){

e.preventDefault();

let obj={
name:name,
department:department,
staffid:staffid,
designation:designation,
experience:experience
};

console.log(obj);
}

return(

<div className="form-container">

<h2>Staff Registration</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Staff Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="text"
placeholder="Department"
value={department}
onChange={(e)=>setDepartment(e.target.value)}
/>

<input
type="text"
placeholder="Staff ID"
value={staffid}
onChange={(e)=>setStaffid(e.target.value)}
/>

<input
type="text"
placeholder="Designation"
value={designation}
onChange={(e)=>setDesignation(e.target.value)}
/>

<input
type="text"
placeholder="Experience"
value={experience}
onChange={(e)=>setExperience(e.target.value)}
/>

<button type="submit">Submit</button>

</form>

<div className="preview">

<p>Name : {name}</p>
<p>Department : {department}</p>
<p>Staff ID : {staffid}</p>
<p>Designation : {designation}</p>
<p>Experience : {experience}</p>

</div>

</div>

);
}
