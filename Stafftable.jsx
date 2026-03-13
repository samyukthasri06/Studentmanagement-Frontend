import './Staff.css';

export default function Stafftable({data}){

return(

<div className="table-container">

<h2 className="grid-title">Staff Table</h2>

<table border={1}>

<thead>
<tr>
<th>Name</th>
<th>Department</th>
<th>Staff ID</th>
<th>Designation</th>
<th>Experience</th>
</tr>
</thead>

<tbody>

{
data?.map((val)=>(
<tr key={val?.id}>
<td>{val?.name}</td>
<td>{val?.department}</td>
<td>{val?.staffid}</td>
<td>{val?.designation}</td>
<td>{val?.experience}</td>
</tr>
))
}

</tbody>

</table>

</div>

);
}
