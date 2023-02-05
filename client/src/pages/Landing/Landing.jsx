import React from "react";
import styles from "./Landing.module.css";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.landing}>
      <br />
      <h1>¡Bienvenido a mi Proyecto Individual!</h1>
      <img src={Logo} alt="Logo" />
      <br />
      <Link to="/home">
        <h3>Click here to continue</h3>
      </Link>
    </div>
  );
}

export default Landing;
