const { Router } = require("express");

const { getTemps } = require("../handlers/temperamentsHandlers");

const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemps);

module.exports = temperamentsRouter;