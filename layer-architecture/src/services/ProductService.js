import mongoose from "mongoose"
import { ProductRepository } from "../repositories/ProductRepository.js"
import { AppError } from "../errors/AppError.js"

export class ProductService {

    static async createProduct(data){
        const existingProductName = await ProductRepository.getProductByName(data.product_name?.trim())
        if (existingProductName) {
            throw new AppError("Ce nom de produit existe déjà. Veuillez en choisir un autre.", 409)
        }
        return await ProductRepository.createProduct(data)                                                                                                                          
    }

    static async getProductById(id){
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new AppError("L'id du produit est invalide.", 400)
        }

        const product = await ProductRepository.getProductById(id)
        if (!product) {
            throw new AppError("Produit non trouvé.", 404                                                                           )
        }

        return product
    }

    static async getAllProducts(data){
        const queries = {}

        if (data?.product_name) {
            queries.product_name = { $regex: data.product_name, $options: "i" }
        }

        return await ProductRepository.getAllProducts(queries)
    }

    static async updateProduct(id, data){
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new AppError("L'id du produit est invalide.", 400)
        }

        const existingProduct = await ProductRepository.getProductById(id)
        if (!existingProduct) {
            throw new AppError("Produit non trouvé.", 404)
        }

        if (data?.product_name){
            const existingProductName = await ProductRepository.getProductByName(data.product_name?.trim())
            if (existingProductName) {
                throw new AppError("Ce nom de produit existe déjà. Veuillez en choisir un autre.", 409)
            }
        }

        return await ProductRepository.updateProduct(id, data)
    }

    static async deleteProduct(id){
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new AppError("L'id du produit est invalide.", 400)
        }

        const existingProduct = await ProductRepository.getProductById(id)

        if (!existingProduct) {
            throw new AppError("Produit non trouvé.", 404)
        }

        await ProductRepository.deleteProduct(id)

        return { message: "Produit supprimé avec succès." }
    }
}