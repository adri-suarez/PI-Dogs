import React from "react";

function Card(props) {
  return (
    <>
      <h2>{props.dog.name}</h2>
      <img style={{ width: "200px" }} src={props.dog.image} alt="nodog" />
      <div>{props.dog.height}</div>
      <div>{props.dog.weight}</div>
      <div>{props.dog.life_span}</div>
      <hr />
    </>
  );
}

export default Card;
