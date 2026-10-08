import express from "express"
import { ProductController } from "../controllers/ProductController.js"
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware.js"
import { ProductValidator } from "../validators/ProductionValidator.js"

export const ProductRoutes = express.Router()

ProductRoutes.post("/", ValidatorMiddleware(ProductValidator.createSchemaValidator), ProductController.createProduct)
ProductRoutes.get("/:id", ProductController.getProductById)
ProductRoutes.get("/", ProductController.getAllProducts)
ProductRoutes.patch("/:id", ValidatorMiddleware(ProductValidator.updateSchemaValidator), ProductController.updateProduct)
ProductRoutes.delete("/:id", ProductController.deleteProduct)