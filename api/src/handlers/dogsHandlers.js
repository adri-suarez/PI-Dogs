const format_all_data = require("../controllers/formatAllData");
const create_dog = require("../controllers/postDogController");

const getDogs = async (req, res) => {
  const { name } = req.query;
  try {
    let data = await format_all_data();
    if (name) {
      let findByName = data.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      findByName.length
        ? res.send(findByName)
        : res.status(400).json({ msg: "Dog not found" });
    } else {
      res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const dogById = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await format_all_data();
    let dogById = data.find((e) => e.id == id);
    dogById
      ? res.status(200).send([dogById])
      : res.status(400).json({ msg: `No dog with the id: ${id}` });
  } catch (error) {
    console.log(error);
  }
};

const postDog = async (req, res) => {
  try {
    let newDog = await create_dog(req.body);
    newDog.msg ? res.status(400).json(newDog) : res.status(200).json(newDog);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDogs, dogById, postDog };
