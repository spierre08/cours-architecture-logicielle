import { ProductModel } from "../models/Product.js"

export class ProductRepository {

    static async createProduct(data){
       return await ProductModel.create(data)
    }

    static async getProductById(id){
        return await ProductModel.findById(id)
    }

    static async getProductByName(name){
        return await ProductModel.findOne({ product_name: name }).collation({ locale: "fr", strength: 2 })
    }

    static async getAllProducts(queries){
        return await ProductModel.find(queries)
    }

    static async updateProduct(id, data){
        return await ProductModel.findByIdAndUpdate(id, data, { returnDocument: "after" })
    }

    static async deleteProduct(id){
        return await ProductModel.findByIdAndDelete(id)
    }
}