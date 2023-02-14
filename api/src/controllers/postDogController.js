const { Dog, Temperament } = require("../db");
const { DEFAULT_IMG } = process.env;

async function create_dog(
  { name, height, weight, life_span, temperament, image } = req.body
) {
  /*   const validateFields = await postValidator(name, height, weight, temperament);
  if (validateFields) return validateFields; */

  let createDog = await Dog.create({
    name,
    height,
    weight,
    life_span: life_span ? life_span : "Unknown",
    image: image ? image : DEFAULT_IMG,
  });

  let findTemp = await Temperament.findAll({ where: { id: temperament } });
  createDog.addTemperament(findTemp);
  return createDog;
}

module.exports = create_dog;
