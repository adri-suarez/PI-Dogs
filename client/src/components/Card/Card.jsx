import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { id, image, name, temperament, weightMin, weightMax } = props.dog;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to={`dog/${id}`}>
          <img src={image} alt="dog" />
        </Link>
        <div className={styles.dogName}>
          <h4>{name}</h4>
        </div>
        <div className={styles.temp}>
          <h4>Temperaments:</h4>
          <p>
            {temperament === "unknown"
              ? "unknown"
              : temperament.map((e) => e).join(", ")}
          </p>
        </div>
        <div className={styles.span}>
          <p>
            Approx. Weight: {weightMin ? weightMin : ""}
            {weightMax ? " - " + weightMax : ""} (kg)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
