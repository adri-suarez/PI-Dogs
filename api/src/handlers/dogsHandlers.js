const getAndFormatData = require("../controllers/getAndFormatData");
const postDogController = require("../controllers/postDogController");

const getDogs = async (req, res) => {
  const { name } = req.query;
  try {
    let data = await getAndFormatData();
    if (name) {
      let findByName = data.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      findByName.length
        ? res.send(findByName)
        : res.status(400).json({ msg: "dog not found" });
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
    let data = await getAndFormatData();
    let resp = data.find((e) => e.id == id);
    resp
      ? res.status(200).send(resp)
      : res.status(400).json({ msg: `no dog with the id: ${id}` });
  } catch (error) {
    console.log(error);
  }
};

const postDog = async (req, res) => {
  const { name, height, weight, life_span, temperament, image } = req.body;
  try {
    let newDog = await postDogController(
      name,
      height,
      weight,
      life_span,
      temperament,
      image
    );
    responder.msg ? res.status(400).json(newDog) : res.status(200).json(newDog);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDogs, dogById, postDog };
