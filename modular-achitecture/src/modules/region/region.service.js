import mongoose from "mongoose";
import { RegionRepository } from "./region.repository.js";
import { AppError } from "../../errors/AppError.js"

export class RegionService {

    static async createRegion(regionData){
        const existingRegion = await RegionRepository.getByName(regionData.regionName.trim()); 
        if (existingRegion) {
            throw new AppError("Cette région existe déjà", 409);
        }
        return await RegionRepository.createRegion(regionData);
    }

    static async getAllRegions() {
        return await RegionRepository.getAllRegions();
    }

    static async getRegionById(regionId) {
        if (!mongoose.Types.ObjectId.isValid(regionId)) {
            throw new AppError("ID de région invalide", 400);
        }
        const region = await RegionRepository.getRegionById(regionId);
        if (!region) {
            throw new AppError("Région non trouvée", 404);
        }

        return region;
    }

    static async deleteRegion(regionId) {
        if (!mongoose.Types.ObjectId.isValid(regionId)) {
            throw new AppError("ID de région invalide", 400);
        }

        const region = await RegionRepository.getRegionById(regionId);
        if (!region) {
            throw new AppError("Région non trouvée", 404);
        }

        await RegionRepository.deleteRegion(regionId);

        return { message: "Région supprimée avec succès" };
    }

    static async updateRegion(regionId, updateData) {
        if (!mongoose.Types.ObjectId.isValid(regionId)) {
            throw new AppError("ID de région invalide", 400);
        }

        const region = await RegionRepository.getRegionById(regionId);
        if (!region) {
            throw new AppError("Région non trouvée", 404);
        }

        const existingRegion = await RegionRepository.getByName(updateData.regionName.trim());
        if (existingRegion) {
            throw new AppError("Cette région existe déjà", 409);
        }

        return RegionRepository.updateRegion(regionId, updateData);
    }
}