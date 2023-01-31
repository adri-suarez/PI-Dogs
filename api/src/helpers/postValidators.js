const getAndFormatData = require("../controllers/getAndFormatData");

async function postValidator(name, height, weight) {
  let validator;

  if (name.length < 3) validator = { msg: "name is missing" };
  else if (!height) validator = { msg: "height is missing" };
  else if (!weight) validator = { msg: "weight is missing" };

  let getData = await getAndFormatData();
  if (getData.find((dog) => dog.name === name))
    validator = { msg: "the dog already exists!" };

  return validator;
}

module.exports = postValidator;
