import express from "express"
import { VilleController } from "./ville.controller.js"
import { VilleValidator } from "./validators/ville.validator.js"
import { ValidatorMiddleware } from "../../middlewares/ValidatorMiddleware.js"

export const villeRouter = express.Router()

villeRouter.post("/", ValidatorMiddleware(VilleValidator.createSchemaValidator), VilleController.create)
villeRouter.get("/", VilleController.getAll)
villeRouter.get("/:id", VilleController.getById)
villeRouter.patch("/:id", ValidatorMiddleware(VilleValidator.updateSchemaValidator), VilleController.update)
villeRouter.delete("/:id", VilleController.delete)