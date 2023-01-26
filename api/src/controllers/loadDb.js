const { Temperament } = require("../db");
const axios = require("axios");

const loadDb = async () => {
  try {
    const checkTemps = Temperament.findAll();
    if (!checkTemps.length) {
      const allDogs = await axios.get("https://api.thedogapi.com/v1/breeds");

      const temps = allDogs.data.map((dog) => {
        return { name: dog.temperament };
      });

      const separatedTempsByArray = temps.map((temp) => temp.name?.split(", "));
      const unifyTempsInOneArray = separatedTempsByArray.join(",").split(",");
      const removeDuplicatedTemps = [...new Set(unifyTempsInOneArray)];
      const createdObjects = removeDuplicatedTemps.map((e) => {
        return {
          name: e,
        };
      });
      Temperament.bulkCreate(createdObjects);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadDb;
