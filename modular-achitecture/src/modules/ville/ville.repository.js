import { VilleModel } from "./models/ville.model.js";

export class VilleRepository {

    static async createVille(data){
        return await VilleModel.create(data)
    }

    static async getVilleById(id){
        return await VilleModel.findById(id).populate("regionId", "_id regionName")
    }

    static async getByVillaName(villeName){
        return await VilleModel.findOne({ villeName }).collation({ locale: 'fr', strength: 2 })
    }

    static async getAllVille(queries){
        return await VilleModel.find(queries).populate("regionId", "_id regionName").sort({ villeName: 1 })
    }

    static async updateVille(id, data){
        return await VilleModel.findByIdAndUpdate(id, data, { returnDocument: 'after'})
    }

    static async deleteVille(id){
        return await VilleModel.findByIdAndDelete(id)
    }
}