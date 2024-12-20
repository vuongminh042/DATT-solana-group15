import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is requried"],
      minlength: 6,
      maxlength: 255,
    },
    description: {
      type: String,
    },
    cause: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cause"
    }]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Category", categorySchema);
