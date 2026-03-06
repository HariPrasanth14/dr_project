import { useState } from "react";
import axios from "axios";
import "./appoint.css";

function Appointment(){

const [name,setName] = useState("");
const [age,setAge]=useState("");
const [doctor,setDoctor] = useState("");
const [date,setDate] = useState("");

const handleSubmit = async () => {

try{

await axios.post("http://localhost:5000/appointment",{
name,
age,
doctor,
date
})

alert("Appointment Booked Successfully")

}catch(error){

alert("Error booking appointment")

}

}

return(

<div className="appointment-container">

<h2>Book Doctor Appointment</h2>

<input
type="text"
placeholder="Patient Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="number"
placeholder="Patient Age"
onChange={(e)=>setAge(e.target.value)}
/>

<input
type="text"
placeholder="Doctor Name"
onChange={(e)=>setDoctor(e.target.value)}
/>

<input
type="date"
onChange={(e)=>setDate(e.target.value)}
/>

<button onClick={handleSubmit}>
Book Appointment
</button>

</div>

)

}

export default Appointment;