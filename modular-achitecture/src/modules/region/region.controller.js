import { RegionService } from "./region.service.js";

export class RegionController {

    static async createRegion(req, res){
        const region = await RegionService.createRegion(req.body);
        return res.status(201).json(region);
    }

    static async getAllRegions(req, res){
        const regions = await RegionService.getAllRegions();
        return res.status(200).json(regions);
    }

    static async getById(req, res){
        const region = await RegionService.getRegionById(req.params.id);
        return res.status(200).json(region);
    }

    static async updateRegion(req, res){
        const region = await RegionService.updateRegion(req.params.id, req.body);
        return res.status(200).json(region);
    }

    static async deleteRegion(req, res){
        const region = await RegionService.deleteRegion(req.params.id);
        return res.status(200).json(region);
    }
}