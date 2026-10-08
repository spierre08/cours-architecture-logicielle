import { VilleService } from "./ville.service.js";

export class VilleController {

    static async create(req, res){
        const ville = await VilleService.create(req.body)
        return res.status(201).json(ville)
    }

    static async getById(req, res){
        const ville = await VilleService.getById(req.params.id)
        return res.status(201).json(ville)
    }

    static async getAll(req, res){
        const ville = await VilleService.getAllVilles(req.query)
        return res.status(200).json(ville)
    }

    static async update(req, res){
        const ville = await VilleService.update(req.params.id, req.body)
        return res.status(201).json(ville)
    }

    static async delete(req, res){
        const ville = await VilleService.delete(req.params.id)
        return res.status(201).json(ville)
    }
}