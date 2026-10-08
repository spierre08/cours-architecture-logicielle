import mongoose from 'mongoose';

const VilleSchema = new mongoose.Schema({
    villeName: String,
    regionId: {
        type: mongoose.Types.ObjectId,
        ref: "Region"
    }
}, { collection: "villes", timestamps: true})

export const VilleModel = mongoose.model("Ville", VilleSchema)