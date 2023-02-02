const { Router } = require("express");
const { getDogs, dogById, postDog } = require("../handlers/dogsHandlers");
const validationMiddleware = require("../middlewares/validationMiddleware");
const dogsRouter = Router();

dogsRouter.get("/", getDogs);

dogsRouter.get("/:id", dogById);

dogsRouter.post("/", validationMiddleware, postDog);

module.exports = dogsRouter;
