import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { id, image, name, temperament, weightMin, weightMax } = props.dog;
  return (
    <div className={styles.card}>
      <Link to={`dog/${id}`}>
        <h2>{name}</h2>
        <img src={image} alt="dog" />
        <p className={styles.temp}>
          {temperament === "unknown"
            ? "unknown"
            : temperament.map((e) => e).join(", ")}
        </p>
        <h3 className={styles.weight}>
          Average Weight: {`${weightMin}kg - ${weightMax}kg`}
        </h3>
      </Link>
    </div>
  );
}

export default Card;
