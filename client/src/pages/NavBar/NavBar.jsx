import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <div className={styles.nav}>
      <Link to="/">{"◄🏃"}</Link>
      <Link to="/home">HOME</Link>
      <SearchBar />
    </div>
  );
}

export default NavBar;
