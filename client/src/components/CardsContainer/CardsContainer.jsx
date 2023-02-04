import React from "react";
import Card from "../Card/Card";

function CardsContainer() {
  const dogs = [{
    "id": 221,
    "name": "Shetland Sheepdog",
    "height": "33 - 41cm",
    "weight": "14kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Responsive"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    },
    {
    "name": "Trainable"
    },
    {
    "name": "Strong"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg",
    "created": false
    }]
  return (
    <div>
      {dogs.map((dog, index) => <Card dog={dog} id={index} />
      )}
    </div>
  );
}

export default CardsContainer;
