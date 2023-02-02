const { Dog, Temperament } = require("../db");

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
    image: image ? image : "No image",
  });

  let findTemp = await Temperament.findAll({ where: { id: temperament } });
  createDog.addTemperament(findTemp);
  return createDog;
}

module.exports = create_dog;
