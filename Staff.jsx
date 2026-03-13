import './Staffgrid.css';

export default function Staffgrid({data}){

return(
<div>

<h2 className="grid-title">Staff Grid</h2>

<div className="grid-container">

{
data?.map((val)=>(
<div className="grid-row" key={val?.id}>
<h3>{val?.name}</h3>
<p>Department: {val?.department}</p>
<p>Staff ID: {val?.staffid}</p>
<p>Designation: {val?.designation}</p>
<p>Experience: {val?.experience}</p>
</div>
))
}

</div>

</div>
);
}
