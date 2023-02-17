import React from "react";
import styles from "./Landing.module.css";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.landing}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <span class={styles.dot}></span>
      <div className={styles.continueContainer}>
      <Link to="/home">
        <p className={styles.continue}>Explore breeds</p>
      </Link>
      </div>
    </div>
  );
}

export default Landing;
