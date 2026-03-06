import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            // await axios.post("http://localhost:5000/login",{
            // email,
            // password
            // })

            alert("Login Successful")

            navigate("/home")

        } catch (err) {

            alert("Invalid Login")

        }

    }

    return (

        <div className="register_form">

            <div className="container">

                <h2 className="" style={{ "fontWeight": "bold" }}>Login</h2>
                <br />
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

                <br /><br />

                <button onClick={handleLogin}>Login</button>
                <br />
                <br />
                <p>
                    Don't have account? <Link to="/register">Register</Link>
                </p>

            </div>
        </div>
    )

}

export default Login;

