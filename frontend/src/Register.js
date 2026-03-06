import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

function Register(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [number,setNumber] = useState("");

const handleRegister = async () => {

try{

await axios.post("http://localhost:5000/register",{
email,
password,
number
})

alert("Registered Successfully")

navigate("/")

}catch(err){

alert("Error")

}

}

return(

<div className="container">

<h2>Register</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<input
type="text"
placeholder="Phone Number"
onChange={(e)=>setNumber(e.target.value)}
/>

<br/><br/>

<button onClick={handleRegister}>Register</button>

<p>
Already have account? <Link to="/">Login</Link>
</p>

</div>

)

}

export default Register;