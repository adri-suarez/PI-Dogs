import React from "react";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

function CardsContainer() {
  const dogs = [{
    "id": 1,
    "name": "Affenpinscher",
    "height": "23 - 29cm",
    "weight": "3 - 6kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Stubborn"
    },
    {
    "name": "Curious"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Adventurous"
    },
    {
    "name": "Active"
    },
    {
    "name": "Fun-loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    "created": false
    },
    {
    "id": 2,
    "name": "Afghan Hound",
    "height": "64 - 69cm",
    "weight": "23 - 27kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Aloof"
    },
    {
    "name": "Clownish"
    },
    {
    "name": "Dignified"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Happy"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
    "created": false
    },
    {
    "id": 3,
    "name": "African Hunting Dog",
    "height": "76cm",
    "weight": "20 - 30kg",
    "life_span": "11 years",
    "temperament": [
    {
    "name": "Wild"
    },
    {
    "name": "Hardworking"
    },
    {
    "name": "Dutiful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
    "created": false
    },
    {
    "id": 4,
    "name": "Airedale Terrier",
    "height": "53 - 58cm",
    "weight": "18 - 29kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Outgoing"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
    "created": false
    },
    {
    "id": 5,
    "name": "Akbash Dog",
    "height": "71 - 86cm",
    "weight": "41 - 54kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Loyal"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Brave"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
    "created": false
    },
    {
    "id": 6,
    "name": "Akita",
    "height": "61 - 71cm",
    "weight": "29 - 52kg",
    "life_span": "10 - 14 years",
    "temperament": [
    {
    "name": "Docile"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Responsive"
    },
    {
    "name": "Dignified"
    },
    {
    "name": "Composed"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Receptive"
    },
    {
    "name": "Faithful"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
    "created": false
    },
    {
    "id": 7,
    "name": "Alapaha Blue Blood Bulldog",
    "height": "46 - 61cm",
    "weight": "25 - 41kg",
    "life_span": "12 - 13 years",
    "temperament": [
    {
    "name": "Loving"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Trainable"
    },
    {
    "name": "Dutiful"
    },
    {
    "name": "Responsible"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
    "created": false
    },
    {
    "id": 8,
    "name": "Alaskan Husky",
    "height": "58 - 66cm",
    "weight": "17 - 23kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Confident"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
    "created": false
    },
    {
    "id": 9,
    "name": "Alaskan Malamute",
    "height": "58 - 64cm",
    "weight": "29 - 45kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Dignified"
    },
    {
    "name": "Playful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
    "created": false
    },
    {
    "id": 10,
    "name": "American Bulldog",
    "height": "56 - 69cm",
    "weight": "27 - 54kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Assertive"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Dominant"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg",
    "created": false
    },
    {
    "id": 11,
    "name": "American Bully",
    "height": "36 - 43cm",
    "weight": "14 - 68kg",
    "life_span": "8 – 15 years",
    "temperament": [
    {
    "name": "Strong Willed"
    },
    {
    "name": "Stubborn"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Clownish"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg",
    "created": false
    },
    {
    "id": 12,
    "name": "American Eskimo Dog",
    "height": "38 - 48cm",
    "weight": "9 - 18kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg",
    "created": false
    },
    {
    "id": 13,
    "name": "American Eskimo Dog (Miniature)",
    "height": "23 - 30cm",
    "weight": "3 - 5kg",
    "life_span": "13 – 15 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg",
    "created": false
    },
    {
    "id": 14,
    "name": "American Foxhound",
    "height": "53 - 71cm",
    "weight": "29 - 34kg",
    "life_span": "8 - 15 years",
    "temperament": [
    {
    "name": "Kind"
    },
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg",
    "created": false
    },
    {
    "id": 15,
    "name": "American Pit Bull Terrier",
    "height": "43 - 53cm",
    "weight": "14 - 27kg",
    "life_span": "10 - 15 years",
    "temperament": [
    {
    "name": "Strong Willed"
    },
    {
    "name": "Stubborn"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Clownish"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HkC31gcNm.png",
    "created": false
    },
    {
    "id": 16,
    "name": "American Staffordshire Terrier",
    "height": "43 - 48cm",
    "weight": "23 - 27kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Tenacious"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Attentive"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg",
    "created": false
    },
    {
    "id": 17,
    "name": "American Water Spaniel",
    "height": "38 - 46cm",
    "weight": "11 - 20kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg",
    "created": false
    },
    {
    "id": 18,
    "name": "Anatolian Shepherd Dog",
    "height": "69 - 74cm",
    "weight": "36 - 68kg",
    "life_span": "11 - 13 years",
    "temperament": [
    {
    "name": "Steady"
    },
    {
    "name": "Bold"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Proud"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg",
    "created": false
    },
    {
    "id": 19,
    "name": "Appenzeller Sennenhund",
    "height": "51 - 56cm",
    "weight": "22 - 25kg",
    "life_span": "12 – 14 years",
    "temperament": [
    {
    "name": "Reliable"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Self-assured"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg",
    "created": false
    },
    {
    "id": 21,
    "name": "Australian Cattle Dog",
    "height": "43 - 51cm",
    "weight": "20 - 28kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Cautious"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Brave"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg",
    "created": false
    },
    {
    "id": 22,
    "name": "Australian Kelpie",
    "height": "43 - 51cm",
    "weight": "14 - 21kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Eager"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg",
    "created": false
    },
    {
    "id": 23,
    "name": "Australian Shepherd",
    "height": "46 - 58cm",
    "weight": "16 - 29kg",
    "life_span": "12 - 16 years",
    "temperament": [
    {
    "name": "Good-natured"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg",
    "created": false
    },
    {
    "id": 24,
    "name": "Australian Terrier",
    "height": "25 - 28cm",
    "weight": "6 - 7kg",
    "life_span": "15 years",
    "temperament": [
    {
    "name": "Spirited"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Even Tempered"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg",
    "created": false
    },
    {
    "id": 25,
    "name": "Azawakh",
    "height": "58 - 74cm",
    "weight": "15 - 25kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Aloof"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Attentive"
    },
    {
    "name": "Rugged"
    },
    {
    "name": "Fierce"
    },
    {
    "name": "Refined"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg",
    "created": false
    },
    {
    "id": 26,
    "name": "Barbet",
    "height": "51 - 66cm",
    "weight": "18 - 29kg",
    "life_span": "13 – 15 years",
    "temperament": [
    {
    "name": "Obedient"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Joyful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg",
    "created": false
    },
    {
    "id": 28,
    "name": "Basenji",
    "height": "41 - 43cm",
    "weight": "10 - 11kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Curious"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg",
    "created": false
    },
    {
    "id": 29,
    "name": "Basset Bleu de Gascogne",
    "height": "33 - 38cm",
    "weight": "16 - 18kg",
    "life_span": "10 - 14 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Agile"
    },
    {
    "name": "Curious"
    },
    {
    "name": "Happy"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BkMQll94X.jpg",
    "created": false
    },
    {
    "id": 30,
    "name": "Basset Hound",
    "height": "36cm",
    "weight": "23 - 29kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Tenacious"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Gentle"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg",
    "created": false
    },
    {
    "id": 31,
    "name": "Beagle",
    "height": "33 - 38cm",
    "weight": "9 - 16kg",
    "life_span": "13 - 16 years",
    "temperament": [
    {
    "name": "Amiable"
    },
    {
    "name": "Even Tempered"
    },
    {
    "name": "Excitable"
    },
    {
    "name": "Determined"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg",
    "created": false
    },
    {
    "id": 32,
    "name": "Bearded Collie",
    "height": "51 - 56cm",
    "weight": "20 - 25kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Self-confidence"
    },
    {
    "name": "Hardy"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg",
    "created": false
    },
    {
    "id": 33,
    "name": "Beauceron",
    "height": "61 - 70cm",
    "weight": "36 - 50kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg",
    "created": false
    },
    {
    "id": 34,
    "name": "Bedlington Terrier",
    "height": "38 - 41cm",
    "weight": "8 - 10kg",
    "life_span": "14 - 16 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Spirited"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Good-tempered"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ByK8gx947.jpg",
    "created": false
    },
    {
    "id": 36,
    "name": "Belgian Malinois",
    "height": "56 - 66cm",
    "weight": "18 - 36kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Watchful"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Stubborn"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Hard-working"
    },
    {
    "name": "Active"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg",
    "created": false
    },
    {
    "id": 38,
    "name": "Belgian Tervuren",
    "height": "56 - 66cm",
    "weight": "18 - 29kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Energetic"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Attentive"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg",
    "created": false
    },
    {
    "id": 41,
    "name": "Bernese Mountain Dog",
    "height": "58 - 70cm",
    "weight": "29 - 54kg",
    "life_span": "7 - 10 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Faithful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg",
    "created": false
    },
    {
    "id": 42,
    "name": "Bichon Frise",
    "height": "24 - 29cm",
    "weight": "5 - 8kg",
    "life_span": "15 years",
    "temperament": [
    {
    "name": "Feisty"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Cheerful"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Sensitive"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg",
    "created": false
    },
    {
    "id": 43,
    "name": "Black and Tan Coonhound",
    "height": "58 - 69cm",
    "weight": "29 - 45kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Easygoing"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Adaptable"
    },
    {
    "name": "Trusting"
    },
    {
    "name": "Even Tempered"
    },
    {
    "name": "Lovable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg",
    "created": false
    },
    {
    "id": 45,
    "name": "Bloodhound",
    "height": "58 - 69cm",
    "weight": "36 - 50kg",
    "life_span": "8 - 10 years",
    "temperament": [
    {
    "name": "Stubborn"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Even Tempered"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg",
    "created": false
    },
    {
    "id": 47,
    "name": "Bluetick Coonhound",
    "height": "53 - 69cm",
    "weight": "20 - 36kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg",
    "created": false
    },
    {
    "id": 48,
    "name": "Boerboel",
    "height": "56 - 69cm",
    "weight": "50 - 91kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Obedient"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Dominant"
    },
    {
    "name": "Territorial"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg",
    "created": false
    },
    {
    "id": 50,
    "name": "Border Collie",
    "height": "46 - 56cm",
    "weight": "14 - 20kg",
    "life_span": "12 - 16 years",
    "temperament": [
    {
    "name": "Tenacious"
    },
    {
    "name": "Keen"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Responsive"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg",
    "created": false
    },
    {
    "id": 51,
    "name": "Border Terrier",
    "height": "28 - 41cm",
    "weight": "5 - 7kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Even Tempered"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg",
    "created": false
    },
    {
    "id": 53,
    "name": "Boston Terrier",
    "height": "41 - 43cm",
    "weight": "5 - 11kg",
    "life_span": "11 - 13 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg",
    "created": false
    },
    {
    "id": 54,
    "name": "Bouvier des Flandres",
    "height": "60 - 70cm",
    "weight": "32 - 50kg",
    "life_span": "10 - 15 years",
    "temperament": [
    {
    "name": "Protective"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Familial"
    },
    {
    "name": "Rational"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg",
    "created": false
    },
    {
    "id": 55,
    "name": "Boxer",
    "height": "55 - 64cm",
    "weight": "23 - 32kg",
    "life_span": "8 - 10 years",
    "temperament": [
    {
    "name": "Devoted"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Cheerful"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Bright"
    },
    {
    "name": "Brave"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg",
    "created": false
    },
    {
    "id": 56,
    "name": "Boykin Spaniel",
    "height": "36 - 46cm",
    "weight": "11 - 18kg",
    "life_span": "10 - 14 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Eager"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg",
    "created": false
    },
    {
    "id": 57,
    "name": "Bracco Italiano",
    "height": "55 - 67cm",
    "weight": "25 - 40kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Stubborn"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg",
    "created": false
    },
    {
    "id": 58,
    "name": "Briard",
    "height": "56 - 69cm",
    "weight": "32 - 41kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Faithful"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg",
    "created": false
    },
    {
    "id": 59,
    "name": "Brittany",
    "height": "44 - 52cm",
    "weight": "14 - 20kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Agile"
    },
    {
    "name": "Adaptable"
    },
    {
    "name": "Quick"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Attentive"
    },
    {
    "name": "Happy"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg",
    "created": false
    },
    {
    "id": 61,
    "name": "Bull Terrier",
    "height": "53 - 56cm",
    "weight": "23 - 32kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Trainable"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Keen"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg",
    "created": false
    },
    {
    "id": 62,
    "name": "Bull Terrier (Miniature)",
    "height": "25 - 36cm",
    "weight": "11 - 15kg",
    "life_span": "11 – 14 years",
    "temperament": [
    {
    "name": "Trainable"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Keen"
    },
    {
    "name": "Active"
    },
    {
    "name": "Territorial"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg",
    "created": false
    },
    {
    "id": 64,
    "name": "Bullmastiff",
    "height": "61 - 69cm",
    "weight": "45 - 59kg",
    "life_span": "8 - 12 years",
    "temperament": [
    {
    "name": "Docile"
    },
    {
    "name": "Reliable"
    },
    {
    "name": "Devoted"
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
    "name": "Loving"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Powerful"
    },
    {
    "name": "Calm"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg",
    "created": false
    },
    {
    "id": 65,
    "name": "Cairn Terrier",
    "height": "23 - 25cm",
    "weight": "6 - 6kg",
    "life_span": "14 - 15 years",
    "temperament": [
    {
    "name": "Hardy"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Assertive"
    },
    {
    "name": "Gay"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg",
    "created": false
    },
    {
    "id": 67,
    "name": "Cane Corso",
    "height": "60 - 70cm",
    "weight": "40 - 54kg",
    "life_span": "10 - 11 years",
    "temperament": [
    {
    "name": "Trainable"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Stable"
    },
    {
    "name": "Quiet"
    },
    {
    "name": "Even Tempered"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg",
    "created": false
    },
    {
    "id": 68,
    "name": "Cardigan Welsh Corgi",
    "height": "27 - 32cm",
    "weight": "11 - 17kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg",
    "created": false
    },
    {
    "id": 69,
    "name": "Catahoula Leopard Dog",
    "height": "51 - 66cm",
    "weight": "23 - 43kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Energetic"
    },
    {
    "name": "Inquisitive"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg",
    "created": false
    },
    {
    "id": 70,
    "name": "Caucasian Shepherd (Ovcharka)",
    "height": "61 - 85cm",
    "weight": "36 - 45kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Alert"
    },
    {
    "name": "Quick"
    },
    {
    "name": "Dominant"
    },
    {
    "name": "Powerful"
    },
    {
    "name": "Calm"
    },
    {
    "name": "Strong"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg",
    "created": false
    },
    {
    "id": 71,
    "name": "Cavalier King Charles Spaniel",
    "height": "30 - 33cm",
    "weight": "6 - 8kg",
    "life_span": "10 - 14 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Sociable"
    },
    {
    "name": "Patient"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Adaptable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg",
    "created": false
    },
    {
    "id": 76,
    "name": "Chesapeake Bay Retriever",
    "height": "53 - 66cm",
    "weight": "25 - 36kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Quiet"
    },
    {
    "name": "Dominant"
    },
    {
    "name": "Happy"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg",
    "created": false
    },
    {
    "id": 78,
    "name": "Chinese Crested",
    "height": "28 - 33cm",
    "weight": "5 - 6kg",
    "life_span": "10 - 14 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Happy"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg",
    "created": false
    },
    {
    "id": 79,
    "name": "Chinese Shar-Pei",
    "height": "46 - 51cm",
    "weight": "20 - 27kg",
    "life_span": "10 years",
    "temperament": [
    {
    "name": "Suspicious"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg",
    "created": false
    },
    {
    "id": 80,
    "name": "Chinook",
    "height": "56 - 66cm",
    "weight": "23 - 41kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Dignified"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg",
    "created": false
    },
    {
    "id": 81,
    "name": "Chow Chow",
    "height": "43 - 51cm",
    "weight": "18 - 32kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Aloof"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Quiet"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg",
    "created": false
    },
    {
    "id": 84,
    "name": "Clumber Spaniel",
    "height": "43 - 51cm",
    "weight": "25 - 39kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Dignified"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Calm"
    },
    {
    "name": "Great-hearted"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg",
    "created": false
    },
    {
    "id": 86,
    "name": "Cocker Spaniel",
    "height": "36 - 38cm",
    "weight": "9 - 14kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Trainable"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Quiet"
    },
    {
    "name": "Faithful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg",
    "created": false
    },
    {
    "id": 87,
    "name": "Cocker Spaniel (American)",
    "height": "36 - 38cm",
    "weight": "9 - 14kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Outgoing"
    },
    {
    "name": "Sociable"
    },
    {
    "name": "Trusting"
    },
    {
    "name": "Joyful"
    },
    {
    "name": "Even Tempered"
    },
    {
    "name": "Merry"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HkRcZe547.jpg",
    "created": false
    },
    {
    "id": 89,
    "name": "Coton de Tulear",
    "height": "23 - 28cm",
    "weight": "4 - 7kg",
    "life_span": "13 - 16 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Trainable"
    },
    {
    "name": "Vocal"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg",
    "created": false
    },
    {
    "id": 92,
    "name": "Dalmatian",
    "height": "48 - 58cm",
    "weight": "23 - 25kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Outgoing"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Sensitive"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg",
    "created": false
    },
    {
    "id": 94,
    "name": "Doberman Pinscher",
    "height": "61 - 71cm",
    "weight": "30 - 40kg",
    "life_span": "10 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg",
    "created": false
    },
    {
    "id": 95,
    "name": "Dogo Argentino",
    "height": "60 - 69cm",
    "weight": "36 - 45kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Cheerful"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Tolerant"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg",
    "created": false
    },
    {
    "id": 98,
    "name": "Dutch Shepherd",
    "height": "56 - 62cm",
    "weight": "23 - 32kg",
    "life_span": "15 years",
    "temperament": [
    {
    "name": "Reliable"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg",
    "created": false
    },
    {
    "id": 101,
    "name": "English Setter",
    "height": "61 - 64cm",
    "weight": "20 - 36kg",
    "life_span": "12 years",
    "temperament": [
    {
    "name": "Strong Willed"
    },
    {
    "name": "Mischievous"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Hard-working"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Eager"
    },
    {
    "name": "People-Oriented"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg",
    "created": false
    },
    {
    "id": 102,
    "name": "English Shepherd",
    "height": "46 - 58cm",
    "weight": "20 - 30kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Kind"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Adaptable"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Bossy"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg",
    "created": false
    },
    {
    "id": 103,
    "name": "English Springer Spaniel",
    "height": "48 - 51cm",
    "weight": "16 - 23kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Cheerful"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Attentive"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg",
    "created": false
    },
    {
    "id": 104,
    "name": "English Toy Spaniel",
    "height": "25cm",
    "weight": "4 - 6kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Affectionate"
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
    "name": "Happy"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg",
    "created": false
    },
    {
    "id": 105,
    "name": "English Toy Terrier",
    "height": "25 - 30cm",
    "weight": "3 - 4kg",
    "life_span": "12 - 13 years",
    "temperament": [
    {
    "name": "Stubborn"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Cunning"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg",
    "created": false
    },
    {
    "id": 107,
    "name": "Eurasier",
    "height": "52 - 60cm",
    "weight": "18 - 32kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Alert"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Even Tempered"
    },
    {
    "name": "Watchful"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg",
    "created": false
    },
    {
    "id": 108,
    "name": "Field Spaniel",
    "height": "43 - 46cm",
    "weight": "16 - 23kg",
    "life_span": "11 - 15 years",
    "temperament": [
    {
    "name": "Docile"
    },
    {
    "name": "Cautious"
    },
    {
    "name": "Sociable"
    },
    {
    "name": "Sensitive"
    },
    {
    "name": "Adaptable"
    },
    {
    "name": "Familial"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg",
    "created": false
    },
    {
    "id": 110,
    "name": "Finnish Lapphund",
    "height": "41 - 53cm",
    "weight": "15 - 24kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Keen"
    },
    {
    "name": "Faithful"
    },
    {
    "name": "Calm"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg",
    "created": false
    },
    {
    "id": 111,
    "name": "Finnish Spitz",
    "height": "39 - 51cm",
    "weight": "10 - 13kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Playful"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Happy"
    },
    {
    "name": "Vocal"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg",
    "created": false
    },
    {
    "id": 113,
    "name": "French Bulldog",
    "height": "28 - 30cm",
    "weight": "13kg",
    "life_span": "9 - 11 years",
    "temperament": [
    {
    "name": "Playful"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Keen"
    },
    {
    "name": "Sociable"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Easygoing"
    },
    {
    "name": "Patient"
    },
    {
    "name": "Athletic"
    },
    {
    "name": "Bright"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg",
    "created": false
    },
    {
    "id": 114,
    "name": "German Pinscher",
    "height": "43 - 51cm",
    "weight": "11 - 20kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Spirited"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    },
    {
    "name": "Even Tempered"
    },
    {
    "name": "Familial"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg",
    "created": false
    },
    {
    "id": 115,
    "name": "German Shepherd Dog",
    "height": "56 - 66cm",
    "weight": "23 - 41kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Curious"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Watchful"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg",
    "created": false
    },
    {
    "id": 116,
    "name": "German Shorthaired Pointer",
    "height": "53 - 64cm",
    "weight": "20 - 32kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Boisterous"
    },
    {
    "name": "Bold"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Cooperative"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg",
    "created": false
    },
    {
    "id": 119,
    "name": "Giant Schnauzer",
    "height": "60 - 70cm",
    "weight": "29 - 41kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Strong Willed"
    },
    {
    "name": "Kind"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Dominant"
    },
    {
    "name": "Powerful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg",
    "created": false
    },
    {
    "id": 120,
    "name": "Glen of Imaal Terrier",
    "height": "32 - 36cm",
    "weight": "15 - 18kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Spirited"
    },
    {
    "name": "Agile"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Active"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg",
    "created": false
    },
    {
    "id": 121,
    "name": "Golden Retriever",
    "height": "55 - 61cm",
    "weight": "25 - 34kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Intelligent"
    },
    {
    "name": "Kind"
    },
    {
    "name": "Reliable"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Trustworthy"
    },
    {
    "name": "Confident"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg",
    "created": false
    },
    {
    "id": 123,
    "name": "Gordon Setter",
    "height": "58 - 69cm",
    "weight": "20 - 36kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Gay"
    },
    {
    "name": "Eager"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg",
    "created": false
    },
    {
    "id": 124,
    "name": "Great Dane",
    "height": "71 - 81cm",
    "weight": "50 - 86kg",
    "life_span": "7 - 10 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg",
    "created": false
    },
    {
    "id": 125,
    "name": "Great Pyrenees",
    "height": "64 - 81cm",
    "weight": "39 - 52kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Strong Willed"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Patient"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Confident"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B12uzg9V7.png",
    "created": false
    },
    {
    "id": 127,
    "name": "Greyhound",
    "height": "69 - 76cm",
    "weight": "23 - 32kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Athletic"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Quiet"
    },
    {
    "name": "Even Tempered"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg",
    "created": false
    },
    {
    "id": 128,
    "name": "Griffon Bruxellois",
    "height": "23 - 28cm",
    "weight": "5kg",
    "life_span": "10 – 15 years",
    "temperament": [
    {
    "name": "Self-important"
    },
    {
    "name": "Inquisitive"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Sensitive"
    },
    {
    "name": "Watchful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg",
    "created": false
    },
    {
    "id": 129,
    "name": "Harrier",
    "height": "46 - 56cm",
    "weight": "18 - 27kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Outgoing"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Cheerful"
    },
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Tolerant"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg",
    "created": false
    },
    {
    "id": 130,
    "name": "Havanese",
    "height": "22 - 29cm",
    "weight": "3 - 6kg",
    "life_span": "14 - 15 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Responsive"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg",
    "created": false
    },
    {
    "id": 134,
    "name": "Irish Setter",
    "height": "61 - 69cm",
    "weight": "16 - 32kg",
    "life_span": "10 - 11 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Companionable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg",
    "created": false
    },
    {
    "id": 135,
    "name": "Irish Terrier",
    "height": "46cm",
    "weight": "11 - 12kg",
    "life_span": "12 - 16 years",
    "temperament": [
    {
    "name": "Respectful"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Dominant"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/By-hGecVX.jpg",
    "created": false
    },
    {
    "id": 137,
    "name": "Irish Wolfhound",
    "height": "76 - 89cm",
    "weight": "48 - 82kg",
    "life_span": "6 - 8 years",
    "temperament": [
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Dignified"
    },
    {
    "name": "Patient"
    },
    {
    "name": "Thoughtful"
    },
    {
    "name": "Generous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg",
    "created": false
    },
    {
    "id": 138,
    "name": "Italian Greyhound",
    "height": "33 - 38cm",
    "weight": "3 - 7kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Mischievous"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Agile"
    },
    {
    "name": "Athletic"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg",
    "created": false
    },
    {
    "id": 140,
    "name": "Japanese Chin",
    "height": "20 - 28cm",
    "weight": "2 - 4kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    },
    {
    "name": "Cat-like"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg",
    "created": false
    },
    {
    "id": 141,
    "name": "Japanese Spitz",
    "height": "30 - 38cm",
    "weight": "7 - 9kg",
    "life_span": "10 – 16 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Proud"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg",
    "created": false
    },
    {
    "id": 142,
    "name": "Keeshond",
    "height": "43 - 46cm",
    "weight": "16 - 20kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Agile"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Quick"
    },
    {
    "name": "Sturdy"
    },
    {
    "name": "Bright"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg",
    "created": false
    },
    {
    "id": 144,
    "name": "Komondor",
    "height": "65 - 70cm",
    "weight": "36 - 45kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Steady"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Bko0fl547.jpg",
    "created": false
    },
    {
    "id": 145,
    "name": "Kooikerhondje",
    "height": "36 - 41cm",
    "weight": "9 - 14kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Benevolent"
    },
    {
    "name": "Agile"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    },
    {
    "name": "Territorial"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/kOMy84GQE.jpg",
    "created": false
    },
    {
    "id": 147,
    "name": "Kuvasz",
    "height": "66 - 76cm",
    "weight": "32 - 52kg",
    "life_span": "8 - 10 years",
    "temperament": [
    {
    "name": "Clownish"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Patient"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg",
    "created": false
    },
    {
    "id": 149,
    "name": "Labrador Retriever",
    "height": "55 - 62cm",
    "weight": "25 - 36kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Kind"
    },
    {
    "name": "Outgoing"
    },
    {
    "name": "Agile"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Trusting"
    },
    {
    "name": "Even Tempered"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg",
    "created": false
    },
    {
    "id": 151,
    "name": "Lagotto Romagnolo",
    "height": "41 - 48cm",
    "weight": "11 - 16kg",
    "life_span": "14 - 16 years",
    "temperament": [
    {
    "name": "Keen"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Loving"
    },
    {
    "name": "Active"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg",
    "created": false
    },
    {
    "id": 153,
    "name": "Lancashire Heeler",
    "height": "25 - 30cm",
    "weight": "3 - 6kg",
    "life_span": "12 – 15 years",
    "temperament": [
    {
    "name": "Clever"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg",
    "created": false
    },
    {
    "id": 155,
    "name": "Leonberger",
    "height": "65 - 80cm",
    "weight": "54 - 77kg",
    "life_span": "6 - 8 years",
    "temperament": [
    {
    "name": "Obedient"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Adaptable"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg",
    "created": false
    },
    {
    "id": 156,
    "name": "Lhasa Apso",
    "height": "25 - 28cm",
    "weight": "5 - 8kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Steady"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Assertive"
    },
    {
    "name": "Spirited"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg",
    "created": false
    },
    {
    "id": 161,
    "name": "Maltese",
    "height": "20 - 25cm",
    "weight": "2 - 3kg",
    "life_span": "15 - 18 years",
    "temperament": [
    {
    "name": "Playful"
    },
    {
    "name": "Docile"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Responsive"
    },
    {
    "name": "Easygoing"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg",
    "created": false
    },
    {
    "id": 165,
    "name": "Miniature American Shepherd",
    "height": "33 - 46cm",
    "weight": "9 - 18kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Energetic"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg",
    "created": false
    },
    {
    "id": 167,
    "name": "Miniature Pinscher",
    "height": "25 - 32cm",
    "weight": "4 - 5kg",
    "life_span": "15 years",
    "temperament": [
    {
    "name": "Clever"
    },
    {
    "name": "Outgoing"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Responsive"
    },
    {
    "name": "Playful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg",
    "created": false
    },
    {
    "id": 168,
    "name": "Miniature Schnauzer",
    "height": "30 - 36cm",
    "weight": "5 - 9kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Spirited"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg",
    "created": false
    },
    {
    "id": 171,
    "name": "Newfoundland",
    "height": "66 - 71cm",
    "weight": "45 - 68kg",
    "life_span": "8 - 10 years",
    "temperament": [
    {
    "name": "Sweet-Tempered"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg",
    "created": false
    },
    {
    "id": 172,
    "name": "Norfolk Terrier",
    "height": "23 - 25cm",
    "weight": "5 - 5kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Self-confidence"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Spirited"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Happy"
    },
    {
    "name": "Lovable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg",
    "created": false
    },
    {
    "id": 176,
    "name": "Norwich Terrier",
    "height": "25cm",
    "weight": "5 - 5kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Hardy"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Sensitive"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg",
    "created": false
    },
    {
    "id": 177,
    "name": "Nova Scotia Duck Tolling Retriever",
    "height": "43 - 53cm",
    "weight": "16 - 23kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Outgoing"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Patient"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg",
    "created": false
    },
    {
    "id": 178,
    "name": "Old English Sheepdog",
    "height": "53cm",
    "weight": "27 - 45kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Sociable"
    },
    {
    "name": "Bubbly"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Adaptable"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg",
    "created": false
    },
    {
    "id": 179,
    "name": "Olde English Bulldogge",
    "height": "38 - 48cm",
    "weight": "NaNkg",
    "life_span": "9 – 14 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Loving"
    },
    {
    "name": "Courageous"
    },
    {
    "name": "Strong"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1d5me547.jpg",
    "created": false
    },
    {
    "id": 181,
    "name": "Papillon",
    "height": "20 - 28cm",
    "weight": "1 - 5kg",
    "life_span": "13 - 17 years",
    "temperament": [
    {
    "name": "Hardy"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Happy"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkJj7e547.jpg",
    "created": false
    },
    {
    "id": 183,
    "name": "Pekingese",
    "height": "15 - 23cm",
    "weight": "6kg",
    "life_span": "14 - 18 years",
    "temperament": [
    {
    "name": "Opinionated"
    },
    {
    "name": "Good-natured"
    },
    {
    "name": "Stubborn"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Aggressive"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg",
    "created": false
    },
    {
    "id": 184,
    "name": "Pembroke Welsh Corgi",
    "height": "25 - 30cm",
    "weight": "11 - 14kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Tenacious"
    },
    {
    "name": "Outgoing"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Bold"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg",
    "created": false
    },
    {
    "id": 185,
    "name": "Perro de Presa Canario",
    "height": "56 - 65cm",
    "weight": "40 - 50kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Strong Willed"
    },
    {
    "name": "Suspicious"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Dominant"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg",
    "created": false
    },
    {
    "id": 188,
    "name": "Pharaoh Hound",
    "height": "53 - 64cm",
    "weight": "18 - 27kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Sociable"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg",
    "created": false
    },
    {
    "id": 189,
    "name": "Plott",
    "height": "51 - 64cm",
    "weight": "18 - 27kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Bold"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg",
    "created": false
    },
    {
    "id": 193,
    "name": "Pomeranian",
    "height": "20 - 30cm",
    "weight": "1 - 3kg",
    "life_span": "15 years",
    "temperament": [
    {
    "name": "Extroverted"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Sociable"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg",
    "created": false
    },
    {
    "id": 196,
    "name": "Poodle (Miniature)",
    "height": "28 - 38cm",
    "weight": "7 - 8kg",
    "life_span": "12 – 15 years",
    "temperament": "unknown",
    "image": "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg",
    "created": false
    },
    {
    "id": 197,
    "name": "Poodle (Toy)",
    "height": "23 - 28cm",
    "weight": "3 - 4kg",
    "life_span": "18 years",
    "temperament": "unknown",
    "image": "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg",
    "created": false
    },
    {
    "id": 201,
    "name": "Pug",
    "height": "25 - 30cm",
    "weight": "6 - 8kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Docile"
    },
    {
    "name": "Clever"
    },
    {
    "name": "Charming"
    },
    {
    "name": "Stubborn"
    },
    {
    "name": "Sociable"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Quiet"
    },
    {
    "name": "Attentive"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg",
    "created": false
    },
    {
    "id": 204,
    "name": "Puli",
    "height": "41 - 43cm",
    "weight": "11 - 16kg",
    "life_span": "12 - 16 Years years",
    "temperament": [
    {
    "name": "Energetic"
    },
    {
    "name": "Agile"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Faithful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg",
    "created": false
    },
    {
    "id": 205,
    "name": "Pumi",
    "height": "38 - 47cm",
    "weight": "8 - 15kg",
    "life_span": "13 - 15 years",
    "temperament": [
    {
    "name": "Lively"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Vocal"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg",
    "created": false
    },
    {
    "id": 207,
    "name": "Rat Terrier",
    "height": "25 - 33cm",
    "weight": "4 - 11kg",
    "life_span": "12 - 18 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Inquisitive"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg",
    "created": false
    },
    {
    "id": 208,
    "name": "Redbone Coonhound",
    "height": "53 - 69cm",
    "weight": "20 - 36kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Familial"
    },
    {
    "name": "Unflappable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg",
    "created": false
    },
    {
    "id": 209,
    "name": "Rhodesian Ridgeback",
    "height": "61 - 69cm",
    "weight": "34 - 36kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Strong Willed"
    },
    {
    "name": "Mischievous"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Dignified"
    },
    {
    "name": "Sensitive"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg",
    "created": false
    },
    {
    "id": 210,
    "name": "Rottweiler",
    "height": "56 - 69cm",
    "weight": "34 - 50kg",
    "life_span": "8 - 10 years",
    "temperament": [
    {
    "name": "Steady"
    },
    {
    "name": "Good-natured"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Obedient"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Self-assured"
    },
    {
    "name": "Calm"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg",
    "created": false
    },
    {
    "id": 211,
    "name": "Russian Toy",
    "height": "19 - 27cm",
    "weight": "1 - 3kg",
    "life_span": "10 - 12 years",
    "temperament": "unknown",
    "image": "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg",
    "created": false
    },
    {
    "id": 212,
    "name": "Saint Bernard",
    "height": "65 - 70cm",
    "weight": "59 - 82kg",
    "life_span": "7 - 10 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Watchful"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png",
    "created": false
    },
    {
    "id": 213,
    "name": "Saluki",
    "height": "58 - 71cm",
    "weight": "16 - 29kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Aloof"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Quiet"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg",
    "created": false
    },
    {
    "id": 214,
    "name": "Samoyed",
    "height": "48 - 60cm",
    "weight": "23 - 27kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Stubborn"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Sociable"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Playful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg",
    "created": false
    },
    {
    "id": 216,
    "name": "Schipperke",
    "height": "25 - 33cm",
    "weight": "5 - 7kg",
    "life_span": "13 - 15 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Agile"
    },
    {
    "name": "Curious"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Faithful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg",
    "created": false
    },
    {
    "id": 218,
    "name": "Scottish Deerhound",
    "height": "71 - 81cm",
    "weight": "32 - 59kg",
    "life_span": "8 - 10 years",
    "temperament": [
    {
    "name": "Docile"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Dignified"
    },
    {
    "name": "Gentle"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg",
    "created": false
    },
    {
    "id": 219,
    "name": "Scottish Terrier",
    "height": "25cm",
    "weight": "8 - 10kg",
    "life_span": "11 - 13 years",
    "temperament": [
    {
    "name": "Feisty"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Quick"
    },
    {
    "name": "Self-assured"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg",
    "created": false
    },
    {
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
    },
    {
    "id": 222,
    "name": "Shiba Inu",
    "height": "34 - 42cm",
    "weight": "8 - 10kg",
    "life_span": "12 - 16 years",
    "temperament": [
    {
    "name": "Charming"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Keen"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Faithful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg",
    "created": false
    },
    {
    "id": 223,
    "name": "Shih Tzu",
    "height": "20 - 28cm",
    "weight": "4 - 7kg",
    "life_span": "10 - 18 years",
    "temperament": [
    {
    "name": "Clever"
    },
    {
    "name": "Spunky"
    },
    {
    "name": "Outgoing"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Independent"
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
    "name": "Happy"
    },
    {
    "name": "Active"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg",
    "created": false
    },
    {
    "id": 225,
    "name": "Shiloh Shepherd",
    "height": "66 - 76cm",
    "weight": "54 - 64kg",
    "life_span": "9 – 14 years",
    "temperament": [
    {
    "name": "Outgoing"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Loving"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg",
    "created": false
    },
    {
    "id": 226,
    "name": "Siberian Husky",
    "height": "51 - 60cm",
    "weight": "16 - 27kg",
    "life_span": "12 years",
    "temperament": [
    {
    "name": "Outgoing"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg",
    "created": false
    },
    {
    "id": 228,
    "name": "Silky Terrier",
    "height": "23 - 25cm",
    "weight": "4 - 5kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Responsive"
    },
    {
    "name": "Inquisitive"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Quick"
    },
    {
    "name": "Joyful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg",
    "created": false
    },
    {
    "id": 232,
    "name": "Smooth Fox Terrier",
    "height": "39cm",
    "weight": "NaN - 8kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg",
    "created": false
    },
    {
    "id": 233,
    "name": "Soft Coated Wheaten Terrier",
    "height": "41 - 46cm",
    "weight": "14 - 18kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Spirited"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Faithful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg",
    "created": false
    },
    {
    "id": 235,
    "name": "Spanish Water Dog",
    "height": "41 - 51cm",
    "weight": "14 - 23kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Trainable"
    },
    {
    "name": "Diligent"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Athletic"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg",
    "created": false
    },
    {
    "id": 236,
    "name": "Spinone Italiano",
    "height": "57 - 70cm",
    "weight": "28 - 39kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Docile"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Patient"
    },
    {
    "name": "Gentle"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg",
    "created": false
    },
    {
    "id": 238,
    "name": "Staffordshire Bull Terrier",
    "height": "36 - 41cm",
    "weight": "11 - 17kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Reliable"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Bold"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg",
    "created": false
    },
    {
    "id": 239,
    "name": "Standard Schnauzer",
    "height": "44 - 50cm",
    "weight": "14 - 23kg",
    "life_span": "13 - 15 years",
    "temperament": [
    {
    "name": "Trainable"
    },
    {
    "name": "Good-natured"
    },
    {
    "name": "Devoted"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg",
    "created": false
    },
    {
    "id": 242,
    "name": "Swedish Vallhund",
    "height": "29 - 34cm",
    "weight": "9 - 14kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Watchful"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg",
    "created": false
    },
    {
    "id": 243,
    "name": "Thai Ridgeback",
    "height": "51 - 61cm",
    "weight": "16 - 25kg",
    "life_span": "10 - 12 years",
    "temperament": [
    {
    "name": "Protective"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    },
    {
    "name": "Familial"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg",
    "created": false
    },
    {
    "id": 244,
    "name": "Tibetan Mastiff",
    "height": "61 - 66cm",
    "weight": "39 - 64kg",
    "life_span": "10 - 14 years",
    "temperament": [
    {
    "name": "Strong Willed"
    },
    {
    "name": "Tenacious"
    },
    {
    "name": "Aloof"
    },
    {
    "name": "Stubborn"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Protective"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkM9sec47.jpg",
    "created": false
    },
    {
    "id": 245,
    "name": "Tibetan Spaniel",
    "height": "25cm",
    "weight": "4 - 7kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Willful"
    },
    {
    "name": "Aloof"
    },
    {
    "name": "Assertive"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Happy"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Hyjcol947.jpg",
    "created": false
    },
    {
    "id": 246,
    "name": "Tibetan Terrier",
    "height": "36 - 43cm",
    "weight": "9 - 11kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Amiable"
    },
    {
    "name": "Reserved"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Sensitive"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg",
    "created": false
    },
    {
    "id": 248,
    "name": "Toy Fox Terrier",
    "height": "20 - 28cm",
    "weight": "2 - 4kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Spirited"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Intelligent"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B17ase9V7.jpg",
    "created": false
    },
    {
    "id": 250,
    "name": "Treeing Walker Coonhound",
    "height": "51 - 69cm",
    "weight": "20 - 36kg",
    "life_span": "10 - 13 years",
    "temperament": [
    {
    "name": "Clever"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Loving"
    },
    {
    "name": "Trainable"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg",
    "created": false
    },
    {
    "id": 251,
    "name": "Vizsla",
    "height": "53 - 61cm",
    "weight": "23 - 29kg",
    "life_span": "10 - 14 years",
    "temperament": [
    {
    "name": "Affectionate"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Quiet"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg",
    "created": false
    },
    {
    "id": 253,
    "name": "Weimaraner",
    "height": "58 - 69cm",
    "weight": "25 - 41kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Steady"
    },
    {
    "name": "Aloof"
    },
    {
    "name": "Stubborn"
    },
    {
    "name": "Energetic"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Powerful"
    },
    {
    "name": "Fast"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg",
    "created": false
    },
    {
    "id": 254,
    "name": "Welsh Springer Spaniel",
    "height": "43 - 48cm",
    "weight": "16 - 25kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Stubborn"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Loyal"
    },
    {
    "name": "Playful"
    },
    {
    "name": "Active"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg",
    "created": false
    },
    {
    "id": 256,
    "name": "West Highland White Terrier",
    "height": "25 - 28cm",
    "weight": "7 - 10kg",
    "life_span": "15 - 20 years",
    "temperament": [
    {
    "name": "Hardy"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Gay"
    },
    {
    "name": "Active"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg",
    "created": false
    },
    {
    "id": 257,
    "name": "Whippet",
    "height": "46 - 56cm",
    "weight": "11 - 16kg",
    "life_span": "12 - 15 years",
    "temperament": [
    {
    "name": "Friendly"
    },
    {
    "name": "Affectionate"
    },
    {
    "name": "Lively"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Quiet"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg",
    "created": false
    },
    {
    "id": 258,
    "name": "White Shepherd",
    "height": "56 - 64cm",
    "weight": "27 - 39kg",
    "life_span": "12 – 14 years",
    "temperament": [
    {
    "name": "Self-confidence"
    },
    {
    "name": "Aloof"
    },
    {
    "name": "Fearless"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Eager"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg",
    "created": false
    },
    {
    "id": 259,
    "name": "Wire Fox Terrier",
    "height": "33 - 41cm",
    "weight": "7 - 9kg",
    "life_span": "13 – 14 years",
    "temperament": [
    {
    "name": "Fearless"
    },
    {
    "name": "Friendly"
    },
    {
    "name": "Bold"
    },
    {
    "name": "Keen"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Quick"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg",
    "created": false
    },
    {
    "id": 260,
    "name": "Wirehaired Pointing Griffon",
    "height": "51 - 61cm",
    "weight": "20 - 32kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Loyal"
    },
    {
    "name": "Gentle"
    },
    {
    "name": "Vigilant"
    },
    {
    "name": "Trainable"
    },
    {
    "name": "Proud"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg",
    "created": false
    },
    {
    "id": 261,
    "name": "Wirehaired Vizsla",
    "height": "55 - 64cm",
    "weight": "20 - 29kg",
    "life_span": "12 - 14 years",
    "temperament": "unknown",
    "image": "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg",
    "created": false
    },
    {
    "id": 262,
    "name": "Xoloitzcuintli",
    "height": "25 - 58cm",
    "weight": "4 - 14kg",
    "life_span": "12 - 14 years",
    "temperament": [
    {
    "name": "Cheerful"
    },
    {
    "name": "Alert"
    },
    {
    "name": "Companionable"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Protective"
    },
    {
    "name": "Calm"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg",
    "created": false
    },
    {
    "id": 264,
    "name": "Yorkshire Terrier",
    "height": "20 - 23cm",
    "weight": "2 - 3kg",
    "life_span": "12 - 16 years",
    "temperament": [
    {
    "name": "Bold"
    },
    {
    "name": "Independent"
    },
    {
    "name": "Confident"
    },
    {
    "name": "Intelligent"
    },
    {
    "name": "Courageous"
    }
    ],
    "image": "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
    "created": false
    }
  ];
  return (
    <div className={styles.container}>
      {dogs.map((dog, index) => (
        <Card dog={dog} id={index} />
      ))}
    </div>
  );
}

export default CardsContainer;
