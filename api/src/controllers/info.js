const axios = require("axios");
const { Dog } = require("../db");

const getAndFormatData = async () => {
  let apiData = await axios.get("https://api.thedogapi.com/v1/breeds");
  let formatApi = apiData.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height.metric.concat(" cm"),
      weight: dog.weight.metric.concat(" kg"),
      life_span: dog.life_span,
      temperament: dog.temperament,
      image: dog.image.url,
    };
  });
  dbData = await Dog.findAll();
  return [...formatApi, ...dbData];
};
module.exports = getAndFormatData;
