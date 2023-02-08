import React from "react";
import styles from "./Landing.module.css";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import patihueso from "../../assets/images/patihueso.gif";

function Landing() {
  return (
    <div className={styles.landing}>
      <hr />
      <h1>¡Bienvenido a mi Proyecto Individual!</h1>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <Link to="/home">
        <a href="/home">Click here to continue</a>
      </Link>
      <hr />
      <img src={patihueso} className={styles.gif} alt="gif" />
      <img src={patihueso} className={styles.gif} alt="gif" />
    </div>
  );
}

export default Landing;
