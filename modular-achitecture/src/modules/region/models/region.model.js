import mongoose from "mongoose";

const RegionSchema = new mongoose.Schema({
    regionName: String
}, { timestamps: true, collection: 'regions' });

export const RegionModel = mongoose.model('Region', RegionSchema);