import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

function Register() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const handleRegister = async () => {

        try {

            await axios.post("http://localhost:5000/register", {
                email,
                password,
                number
            })

            alert("Registered Successfully")

            navigate("/")

        } catch (err) {

            alert("Error")

        }

    }

    return (
        <div className="register_form">

        <div className="container">

            <h2 style={{"fontWeight":"bold"}}>Register</h2>
<br/>
<br/>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
            />

            <br /><br />

            <button onClick={handleRegister}>Register</button>
<br/>
<br/>
            <p>
                Already have account? <Link to="/">Login</Link>
            </p>

        </div>
        </div>

    )

}

export default Register;