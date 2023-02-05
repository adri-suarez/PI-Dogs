import React from "react";
import styles from './Card.module.css'

function Card(props) {
  return (
    
    <div className={styles.card}>
      <h2>{props.dog.name}</h2>
      <img src={props.dog.image} alt="nodog" />
      <h4>Tamaño: {props.dog.height}</h4>
        <h4>Peso: {props.dog.weight}</h4> 
      <div>{props.dog.life_span}</div>
    </div>
    
  );
}

export default Card;
