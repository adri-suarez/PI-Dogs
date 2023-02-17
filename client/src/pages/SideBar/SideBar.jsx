import React from "react";
import styles from "./SideBar.module.css";
import Logo from "../../assets/images/Logo.png";
import Orderings from "../../components/Orderings/Orderings";
import Filters from "../../components/Filters/Filters";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <img src={Logo} alt="logo" />
      <div className={styles.filters}>
        <Filters />
      </div>
      <div className={styles.orders}>
        <Orderings />
      </div>
      <Link to="/create">
        <button className={styles.createBtn}>CREATE NEW BREED</button>
      </Link>
    </div>
  );
}

export default SideBar;
