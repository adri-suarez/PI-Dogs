const format_all_data = require("../controllers/formatAllData");

async function validationMiddleware(req, res, next) {
  const { name, height, weight,life_span, temperament } = req.body;
  //let validator;
  if (!name) return res.status(400).json({ msg: "Name is missing" });
  if (name.length < 3) return res.status(400).json({ msg: "Name is too short" });
  if (!height) return res.status(400).json({ msg: "Height is missing" });
  if (height > 199 || height < 10 || !Number(height)) return res.status(400).json({ msg: "Height is not real" });
  if (!weight) return res.status(400).json({ msg: "Weight is missing" });
  if (weight > 99 || weight < 1 || !Number(weight)) return res.status(400).json({ msg: "Weight is not real" });
  if (life_span > 35 || life_span < 5 || !Number(life_span)) return res.status(400).json({ msg: "Life span is not real" });
  if (!temperament || temperament.length < 1) return res.status(400).json({ msg: "At least one temperament is required" });

  const getData = await format_all_data();
  if (getData.find((dog) => dog.name === name))
    return res.status(400).json({ msg: "This dog already exists!" });

  next();
}

module.exports = validationMiddleware;
