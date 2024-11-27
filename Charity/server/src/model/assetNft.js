import mongoose from "mongoose";

const assetNftSchema = new mongoose.Schema(
  {
    // wallet: {
    //   type: String, // Kiểm tra có phải kiểu String không
    //   required: true, // Nếu required: true, đảm bảo giá trị không null
    // },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("ASSETNFT", assetNftSchema);
