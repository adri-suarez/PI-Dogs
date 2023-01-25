const axios = require("axios");

const getDogs = async (req, res) => {
  const { name } = req.query;
  if (name) {
    res.json({ "estas buscando el nombre": name });
  } else {
    let apiData = await axios.get("https://api.thedogapi.com/v1/breeds");
    let formatApi = apiData.data.map((dog) => {
      return {
        id: dog.id,
        name: dog.name,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
        temperament: dog.temperament,
        image: dog.image.url,
      };
    });
    res.status(200).send(formatApi);
  }
};

const dogById = (req, res) => {
  const { id } = req.params;
  res.json({ "perro con id": id });
};

const postDog = (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "se ha creado el perrito": name });
};

module.exports = { getDogs, dogById, postDog };
