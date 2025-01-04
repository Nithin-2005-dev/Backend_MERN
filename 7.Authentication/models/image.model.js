import { model, Schema } from "mongoose";
const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "image url required"],
    },
    publicId: {
      type: String,
      required: [true, ["public id required"]],
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export const Image = model("Image", imageSchema);
