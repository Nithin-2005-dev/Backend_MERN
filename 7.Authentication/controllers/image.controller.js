import { uploadToCloudinary } from "../helpers/cloudinary.helper.js";
import {} from "path";
import { Image } from "../models/image.model.js";
import { unlinkSync } from "fs";
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required .please upload an image",
      });
    }
    console.log(req.file);
    const { url, publicId } = await uploadToCloudinary(req.file.path);
    const newImage = await Image.create({
      url,
      publicId,
      updatedBy: req.userInfo.userId,
    });
    unlinkSync(req.file.path);
    res.status(200).json({
      success: true,
      message: "image uploaded successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: "something went wrong! please try again",
    });
  }
};
export const fetchImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json({
      success: true,
      message: "images fetched sucessfully",
      images,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: "something went wrong! please try again",
    });
  }
};
