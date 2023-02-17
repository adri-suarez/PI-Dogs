const format_all_data = require("../controllers/formatAllData");

async function validationMiddleware(req, res, next) {
  const { name, weightMin, weightMax, heightMin, heightMax, life_span, temperament } = req.body;
  console.log(req.body)

  
  if (!name) return res.status(400).json({ msg: "Name is missing!" });
  if (name.length < 3) return res.status(400).json({ msg: "The name is too short" });
  
  if (weightMin > 199 || weightMin < 1 || !Number(weightMin)) return res.status(400).json({ msg: "Weight minimum is not real" });
  if (weightMax > 199 || weightMax < 1 || !Number(weightMax)) return res.status(400).json({ msg: "Weight max is not real" });
  if (heightMin > 129 || heightMin < 1 || !Number(heightMin)) return res.status(400).json({ msg: "Height minimum is not real" });
  if (heightMax > 129 || heightMax < 1 || !Number(heightMax)) return res.status(400).json({ msg: "Height max is not real" });
  
  
  if(!weightMin) return res.status(400).json({msg:"Minimum weight is missing!"})
  if(!weightMax) return res.status(400).json({msg:"Max weight is missing!"})
  if(!heightMin) return res.status(400).json({msg:"Minimum height is missing!"})
  if(!heightMax) return res.status(400).json({msg:"Max height is missing!"})
  
  
  if (life_span > 35 || life_span < 5 || !Number(life_span)) return res.status(400).json({ msg: "Life span is not real" });
  if (!temperament || temperament.length < 1) return res.status(400).json({ msg: "At least one temperament is required" });
  const getData = await format_all_data();
  if (getData.find((dog) => dog.name === name))
    return res.status(400).json({ msg: "This dog already exists!" });

  next();
}

module.exports = validationMiddleware;
