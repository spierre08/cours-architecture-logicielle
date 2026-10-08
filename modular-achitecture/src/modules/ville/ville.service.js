import mongoose from "mongoose"
import { VilleRepository } from "./ville.repository.js";
import { RegionRepository } from "../region/region.repository.js";
import { AppError } from "../../errors/AppError.js"

export class VilleService {

    static async create(data){
        if (!mongoose.Types.ObjectId.isValid(data?.regionId)){
            throw new AppError("L'id de la région fournit est invalide", 400)
        }

        const existingRegion = await RegionRepository.getRegionById(data?.regionId)

        if (!existingRegion){
            throw new AppError("Région non trouvé", 404)
        }

        const existingVilleName = await VilleRepository.getByVillaName(data?.villeName.trim())
        if (existingVilleName){
            throw new AppError("Cette ville existe déjà ! Veuillez saisir autre", 409)
        }

        return await VilleRepository.createVille(data)
    }

    static async getAllVilles(filters){
        const { villeName, regionId } = filters
        const queries = {}

        if (villeName){
            queries.villeName = { $regex: villeName, $options: "i" }
        }

        if (regionId){
            if (!mongoose.Types.ObjectId.isValid(regionId)){
                throw new AppError("L'id de la région fournit est invalide", 400)
            }
            queries.regionId = regionId
        }

        return await VilleRepository.getAllVille(queries)
    }

    static async update(id, data){
        if (!mongoose.Types.ObjectId.isValid(id)){
            throw new AppError("L'id de la ville fournit est invalide", 400)
        }

        const existingVille = await VilleRepository.getVilleById(id)

        if (!existingVille){
            throw new AppError("Ville non trouvée", 404)
        }

        if (data?.regionId){
            if (!mongoose.Types.ObjectId.isValid(data?.regionId)){
                throw new AppError("L'id de la région fournit est invalide", 400)
            }
            const existingRegion = await RegionRepository.getRegionById(data?.regionId)

            if (!existingRegion){
                throw new AppError("Région non trouvé", 404)
            }
        }
        

        if (data?.villeName){
            const existingVilleName = await VilleRepository.getByVillaName(data?.villeName.trim())
            if (existingVilleName){
                throw new AppError("Cette ville existe déjà ! Veuillez saisir autre", 409)
            }
        }
        return await VilleRepository.updateVille(id, data)
    } 

    static async getById(id){
        if (!mongoose.Types.ObjectId.isValid(id)){
            throw new AppError("L'id de la ville fournit est invalide", 400)
        }

        const existingVille = await VilleRepository.getVilleById(id)

        if (!existingVille){
            throw new AppError("Ville non trouvée", 404)
        }

        return await VilleRepository.getVilleById(id)
    } 

    static async delete(id){
        if (!mongoose.Types.ObjectId.isValid(id)){
            throw new AppError("L'id de la ville fournit est invalide", 400)
        }

        const existingVille = await VilleRepository.getVilleById(id)

        if (!existingVille){
            throw new AppError("Ville non trouvée", 404)
        }

        await VilleRepository.deleteVille(id)

        return {
            message: "Ville supprimée avec succès !"
        }
    } 
}