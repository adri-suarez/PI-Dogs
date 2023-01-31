const { Dog, Temperament } = require("../db");
const postValidator = require("../helpers/postValidators");

async function postDogController(
  { name, height, weight, life_span, temperament, image } = req.body
) {
  const validateFields = await postValidator(name, height, weight);
  if (validateFields) return validateFields;

  let createDog = await Dog.create({
    name,
    height: height.concat("cm"),
    weight: weight.concat("kg"),
    life_span: life_span ? life_span.concat(" years") : "unknown",
    image,
  });

  let findTemp = await Temperament.findAll({ where: { id: temperament } })
  createDog.addTemperament(findTemp)
  return createDog;
}

module.exports = postDogController;
