import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    product_name: String,
    price: Number,
    description: String
}, { timestamps: true, collection: "products" })

export const ProductModel = mongoose.model("Product", ProductSchema)