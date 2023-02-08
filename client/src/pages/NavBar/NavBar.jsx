import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.nav}>
      <Link to="/">{"◄"}</Link>
      <Link to="/home">HOME</Link>
      <Link to="/create">CREATE</Link>
    </div>
  );
}

export default NavBar;
