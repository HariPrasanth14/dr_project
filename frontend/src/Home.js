import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./App.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img7 from "./img7.jpg";
import img6 from "./download.jpg";

function Home() {

  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <h2 className="logo">DoctorCare</h2>

        <ul>

          <li><a href="#">Home</a></li>

          <li><a href="#doctors">Doctors</a></li>

          <li><Link to="/appointment">Appointment</Link></li>

          <li><Link to="/">Login</Link></li>

        </ul>

      </nav>



      <div className="banner">

        <img
          src={img7}
          alt="doctor banner"
        />

      </div>



      <h2 className="title" id="doctors">Our Doctors</h2>

      <div class="row row-cols-3 row-cols-md-3 g-6 mx-5">
        <div class="col">
          <div class="card">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Cardiologist</h5>
              <p class="card-text"> Dr.Kumar </p>
              <Link to="/appointment">
                <button>Book Appointment</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dentist</h5>
              <p class="card-text">Dr. Priya</p>
              <Link to="/appointment">
                <button>Book Appointment</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dermatologist</h5>
              <p class="card-text">Dr.Madhu</p>
              <Link to="/appointment">
                <button>Book Appointment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-3 row-cols-md-3 g-6 mt-5 mx-5">
        <div class="col">
          <div class="card">
            <img src={img4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pediatrician</h5>
              <p class="card-text">Shalini</p>
              <Link to="/appointment">
                <button>Book Appointment</button>
              </Link>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={img5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Orthopedic</h5>
              <p class="card-text">Dr.Ravi</p>
              <Link to="/appointment">
                <button>Book Appointment</button>
              </Link>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={img6} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> Physician</h5>
              <p class="card-text">Dr.John</p>
              <Link to="/appointment">
                <button>Book Appointment</button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}

      <footer className="footer">


        <div className="icons">

          <FaInstagram />
          <FaTwitter />
          <FaWhatsapp />
          <FaFacebook />

        </div>

        <p>© 2026 DoctorCare. All Rights Reserved.</p>


      </footer>

    </div>

  );

}

export default Home;