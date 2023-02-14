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
      weightMin: dog.weightMin,
      weightMax: dog.weightMax,
      heightMin: dog.heightMin,
      heightMax: dog.heightMax,
      life_span: dog.life_span ? dog.life_span.concat(" years") : "Unknown",
      temperament: dog.temperaments.map((e) => e.name),
      image: dog.image,
      created: true,
    };
  });

  const apiData = await axios.get(
    `https://api.thedogapi.com/v1/breeds?apikey=${API_KEY}`
  );

  const formatApi = apiData.data.map((dog) => {
    let [weightMin, weightMax] = dog.weight.metric.split("-");
    let [heightMin, heightMax] = dog.height.metric.split("-");
    return {
      id: dog.id,
      name: dog.name,
      weightMin: Number(weightMin),
      weightMax: Number(weightMax),
      heightMin: Number(heightMin),
      heightMax: Number(heightMax),
      life_span: dog.life_span,
      temperament: dog.temperament
        ? dog.temperament.split(", ").map((e) => {
            return e;
          })
        : "unknown",
      image: dog.image.url,
      created: false,
    };
  });
  return [...formatDb, ...formatApi];
};
module.exports = format_all_data;
