import express from "express";
import { RegionController } from "./region.controller.js";
import { RegionValidator } from "./validators/region.validator.js";
import { ValidatorMiddleware } from "../../middlewares/ValidatorMiddleware.js";

export const regionRouter = express.Router();

regionRouter.post('/', ValidatorMiddleware(RegionValidator.uniqueSchemaValidator), RegionController.createRegion);
regionRouter.get('/', RegionController.getAllRegions);
regionRouter.get('/:id', RegionController.getById);
regionRouter.put('/:id', ValidatorMiddleware(RegionValidator.uniqueSchemaValidator), RegionController.updateRegion);
regionRouter.delete('/:id', RegionController.deleteRegion);