import { uploadToCloudinary } from "../helpers/cloudinary.helper.js";
import {} from "path";
import { Image } from "../models/image.model.js";
import { unlinkSync } from "fs";
import cloudinary from "../config/cloudinary.config.js";
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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const soryBy = req.query.soryBy || "createdAt";
    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1;
    const totalImages = await Image.countDocuments();
    const totalPages = Math.ceil(totalImages / page);
    const sortObj = {};
    sortObj[soryBy] = sortOrder;
    const images = await Image.find().sort(sortObj).skip(skip).limit(limit);
    res.status(200).json({
      success: true,
      page,
      totalPages,
      totalImages,
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
export const deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const userId = req.userInfo.userId;
    const currentImage = await Image.findById(imageId);
    if (!currentImage) {
      return res.status(404).json({
        success: false,
        message: "image not found",
      });
    }
    if (currentImage.updatedBy.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "you are not authorized to delete this image",
      });
    }
    await cloudinary.v2.uploader.destroy(currentImage.publicId);
    await Image.findByIdAndDelete(imageId);
    res.status(200).json({
      success: true,
      message: "image deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: "something went wrong! please try again",
    });
  }
};
