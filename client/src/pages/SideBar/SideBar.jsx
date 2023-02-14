import React from "react";
import styles from "./SideBar.module.css";
import Logo from "../../assets/images/Logo.png";
import Orderings from "../../components/Orderings/Orderings";
import Filters from "../../components/Filters/Filters";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <img src={Logo} alt="logo" />
      <div className={styles.orders}>
      <Orderings />
      </div>
      <div className={styles.filters}>
      <Filters />
      </div>
    </div>
  );
}

export default SideBar;
