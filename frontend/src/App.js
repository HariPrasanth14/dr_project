import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Appointment from "./Appointment";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route path="/home" element={<Home/>} />

<Route path="/appointment" element={<Appointment/>} />

<Route path="/login" element={<Login/>} />

</Routes>

</BrowserRouter>

);

}

export default App;