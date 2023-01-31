const getAndFormatData = require("./getAndFormatData");

async function postValidator(name, height, weight) {
  let validator;

  if (name.length < 3) validator = { msg: "missing name" };
  else if (!height) validator = { msg: "missing height" };
  else if (!weight) validator = { msg: "missing weight" };

  let getData = await getAndFormatData();
  if (getData.find((dog) => dog.name === name))
    validator = { msg: "dog already exsists!" };

  return validator;
}

module.exports = postValidator;
