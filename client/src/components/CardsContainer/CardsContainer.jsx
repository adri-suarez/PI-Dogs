import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

function CardsContainer() {
  const dogs = useSelector((store) => store.dogs);
  return (
    <>
      <ul className={styles.container}>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Card dog={dog} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardsContainer;
