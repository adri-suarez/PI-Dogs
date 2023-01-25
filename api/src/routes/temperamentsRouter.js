const { Router } = require("express");

const temperamentsRouter = Router();

temperamentsRouter.get("/", (req, res) => {
  res.status(200).send("temperaments router is working");
});

module.exports = temperamentsRouter;
