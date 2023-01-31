const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

const getAndFormatData = async () => {
  let dbData = await Dog.findAll({
    include: {
      model: Temperament,
      attributes:["name", "id"]
    },
  });

  let formatDb = dbData.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperament: dog.temperaments.map(e=>e.name),
      image: dog.image,
    };
  })

  let apiData = await axios.get(
    `https://api.thedogapi.com/v1/breeds?apikey=${API_KEY}`
  );
  let formatApi = apiData.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height.metric.concat("cm"),
      weight: dog.weight.metric.concat("kg"),
      life_span: dog.life_span,
      temperament: dog.temperament,
      image: dog.image.url,
      created: false,
    };
  });
  return [...formatDb, ...formatApi];
};
module.exports = getAndFormatData;
