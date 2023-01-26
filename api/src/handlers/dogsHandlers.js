const { Dog } = require("../db");

const getAndFormatData = require("../controllers/info");

const getDogs = async (req, res) => {
  try {
    const { name } = req.query;
    let data = await getAndFormatData();
    if (name) {
      let encontro = data.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      encontro.length
        ? res.send(encontro)
        : res.status(400).json({ msg: "dog not found" });
    } else {
      res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const dogById = async (req, res) => {
  const { id } = req.params;
  let data = await getAndFormatData();
  let resp = data.find((e) => e.id == id);
  res.send(resp);
};

const postDog = (req, res) => {
  const { name, height, weight, life_span, temperament, image } = req.body;
  Dog.create({
    name: name,
    height: height,
    weight: weight,
    life_span: life_span,
    temperament: temperament,
    image: image,
  });
  res.status(200).json({ "se ha creado el perrito": name });
};

module.exports = { getDogs, dogById, postDog };
