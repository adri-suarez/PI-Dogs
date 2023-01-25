const { Router } = require("express");
const { getDogs, dogById, postDog } = require("../handlers/dogsHandlers");
const dogsRouter = Router();

dogsRouter.get("/", getDogs);

dogsRouter.get("/:id", dogById);

dogsRouter.post("/", postDog);

module.exports = dogsRouter;
