import { RegionModel } from "./models/region.model.js";

export class RegionRepository {

    static async createRegion(regionData) {
        const region = new RegionModel(regionData);
        return await region.save();
    }

    static async getByName(regionName) {
        return await RegionModel.findOne({ regionName }).collation({ locale: 'fr', strength: 2 });
    }

    static async getAllRegions() {
        return await RegionModel.find();
    }

    static async getRegionById(regionId) {
        return await RegionModel.findById(regionId);
    }

    static async updateRegion(regionId, updateData) {
        return await RegionModel.findByIdAndUpdate(regionId, updateData, { returnDocument: 'after' });
    }

    static async deleteRegion(regionId) {
        return await RegionModel.findByIdAndDelete(regionId);
    }
}