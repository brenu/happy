import React from "react";
import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";
import "../styles/pages/Landing.css";

import LogoImg from "../assets/images/Logo.svg";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Happy Logo" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong>Itabuna</strong>
            <span>Bahia</span>
          </div>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Landing;
