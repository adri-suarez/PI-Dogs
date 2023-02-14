import React from "react";
import styles from "./Landing.module.css";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.landing}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <span class={styles.dot}></span>
      <Link to="/home">
        <p className={styles.continue}>Click and search Breeds</p>
      </Link>
    </div>
  );
}

export default Landing;
