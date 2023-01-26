const { Temperament } = require("../db");

const getTemps = async (req, res) => {
  const allTemps = await Temperament.findAll();
  res.send(allTemps);
};

module.exports = { getTemps };
