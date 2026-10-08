import { ProductService } from "../services/ProductService.js"

export class ProductController {
    static async createProduct(req, res) {
        const product = await ProductService.createProduct(req.body)

        return res.status(201).json(product)
    }

    static async getProductById(req, res) {
        const product = await ProductService.getProductById(req.params.id)

        return res.status(200).json(product)
    }

    static async getAllProducts(req, res) {
        const products = await ProductService.getAllProducts(req.query)

        return res.status(200).json(products)
    }

    static async updateProduct(req, res) {
        const product = await ProductService.updateProduct(req.params.id, req.body)

        return res.status(200).json(product)
    }

    static async deleteProduct(req, res) {
        const result = await ProductService.deleteProduct(req.params.id)

        return res.status(200).json(result)
    }
}