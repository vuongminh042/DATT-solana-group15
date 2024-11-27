
import mongoose from "mongoose";


const nftSchema = new mongoose.Schema({
    wallet: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    }
},
{
    timestamps: true,
    versionKey: false
})

export default mongoose.model("NFT", nftSchema)