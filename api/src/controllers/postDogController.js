const { Dog } = require("../db");

async function postDogController(
  name,
  height,
  weight,
  life_span,
  temperament,
  image
) {
  if (name.length < 3) return { msg: "missing name" };
  if (!height) return { msg: "missing height" };
  if (!weight) return { msg: "missing weight" };

  let created = await Dog.create({
    name,
    height,
    weight,
    life_span,
    temperament,
    image,
  });
  return created;
}

module.exports = postDogController;
