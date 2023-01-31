const axios = require("axios");
const { Dog } = require("../db");
const { API_KEY } = process.env;

const getAndFormatData = async () => {
  let dbData = await Dog.findAll();
  let apiData = await axios.get(`https://api.thedogapi.com/v1/breeds?apikey=${API_KEY}`);
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
  return [...dbData, ...formatApi];
};
module.exports = getAndFormatData;
