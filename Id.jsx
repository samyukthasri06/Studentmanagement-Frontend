import data from './Idgrid.json';
import './Id.css';
export default function Studenttable({data}){
return(

<div className="table-container">

<h2 className="grid-title">Student Table</h2>

<table border={1}>

<thead>
<tr>
<th>Name</th>
<th>Course</th>
<th>Regno</th>
<th>Rollno</th>
<th>Duration</th>
</tr>
</thead>

<tbody>

{
data?.map((val)=>(
<tr key={val?.id}>
<td>{val?.name}</td>
<td>{val?.course}</td>
<td>{val?.regno}</td>
<td>{val?.rollno}</td>
<td>{val?.duration}</td>
</tr>
))
}

</tbody>

</table>

</div>

);
}
