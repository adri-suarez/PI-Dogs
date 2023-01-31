const { getTemps } = require("../handlers/temperamentsHandler");

const { Router } = require("express");

const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemps);

module.exports = temperamentsRouter;
