import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <CardsContainer />
    </div>
  );
}

export default Home;
