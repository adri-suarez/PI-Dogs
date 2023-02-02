const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

const format_all_data = async () => {
  
  const dbData = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const formatDb = dbData.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height.concat("cm"),
      weight: dog.weight.concat("kg"),
      life_span: dog.life_span ? dog.life_span.concat(" years") : "Unknown",
      temperament: dog.temperaments,
      image: dog.image,
      created:true
    };
  });

  const apiData = await axios.get(
    `https://api.thedogapi.com/v1/breeds?apikey=${API_KEY}`
  );
  const formatApi = apiData.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height.metric.concat("cm"),
      weight: dog.weight.metric.concat("kg"),
      life_span: dog.life_span,
      temperament: dog.temperament
        ? dog.temperament.split(", ").map((e) => {
            return { name: e };
          })
        : "unknown",
      image: dog.image.url,
      created: false,
    };
  });
  return [...formatDb, ...formatApi];
};
module.exports = format_all_data;
