import { useEffect, useState } from "react";

import Idgrid from "./components/Idgrid";
import Id from "./components/Id";
import StudentRegForm from "./components/StudentRegForm";

import Staffgrid from "./components/Staffgrid";
import Stafftable from "./components/Stafftable";
import StaffRegForm from "./components/StaffRegForm";

import "./App.css";

export default function App() {

const [module,setModule] = useState("student"); 
const [view,setView] = useState("grid");

const [search,setSearch] = useState("");

const [studentData,setStudentData] = useState([]);
const [filteredStudents,setFilteredStudents] = useState([]);

const [staffData,setStaffData] = useState([]);
const [filteredStaff,setFilteredStaff] = useState([]);


useEffect(()=>{

fetch("http://localhost:8080/api/studentmanagement")
.then(res=>res.json())
.then(data=>{
setStudentData(data);
setFilteredStudents(data);
});

fetch("http://localhost:8080/api/staffmanagement")
.then(res=>res.json())
.then(data=>{
setStaffData(data);
setFilteredStaff(data);
});

},[]);


const handleSearch = (e) => {

const value = e.target.value.toLowerCase();

setSearch(value);

if(module === "student"){

setFilteredStudents(
studentData.filter((val)=>
val.name.toLowerCase().includes(value)
)
);

}

if(module === "staff"){

setFilteredStaff(
staffData.filter((val)=>
val.name.toLowerCase().includes(value)
)
);

}

};


return (

<div>

<h1 style={{textAlign:"center"}}>College Management System</h1>


<div className="module-buttons">

<button onClick={()=>setModule("student")}>Students</button>

<button onClick={()=>setModule("staff")}>Staff</button>

</div>


<input
type="text"
placeholder="Search by name"
value={search}
onChange={handleSearch}
/>


<div className="view-buttons">

<button onClick={()=>setView("grid")}>Grid</button>

<button onClick={()=>setView("table")}>Table</button>

</div>


{/* STUDENT MODULE */}

{module === "student" && view==="grid" && (
<Idgrid data={filteredStudents}/>
)}

{module === "student" && view==="table" && (
<Id data={filteredStudents}/>
)}

{module === "student" && <StudentRegForm/>}



{/* STAFF MODULE */}

{module === "staff" && view==="grid" && (
<Staffgrid data={filteredStaff}/>
)}

{module === "staff" && view==="table" && (
<Stafftable data={filteredStaff}/>
)}

{module === "staff" && <StaffRegForm/>}


</div>

);

}
