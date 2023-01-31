const { Dog } = require("../db");
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
    temperament: temperament ? temperament : "unknown",
    image,
  });
  return createDog;
}

module.exports = postDogController;
