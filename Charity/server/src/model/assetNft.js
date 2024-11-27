
import mongoose from "mongoose";


const assetNftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    collectionId: {
        type: String,
        required: true,
    },
    destinationUserReferenceId: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
        versionKey: false
    })

export default mongoose.model("ASSETNFT", assetNftSchema)