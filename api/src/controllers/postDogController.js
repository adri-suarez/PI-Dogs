const { Dog, Temperament } = require("../db");
const { DEFAULT_IMG } = process.env;

async function create_dog(
  {
    name,
    weightMin,
    weightMax,
    heightMin,
    heightMax,
    life_span,
    temperament,
    image,
  } = req.body
) {
  let createDog = await Dog.create({
    name,
    weightMin,
    weightMax,
    heightMin,
    heightMax,
    life_span: life_span ? life_span : "Unknown",
    image: image ? image : DEFAULT_IMG,/* 
    like, */
  });

  let findTemp = await Temperament.findAll({ where: { id: temperament } });
  createDog.addTemperament(findTemp);
  return createDog;
}

module.exports = create_dog;
