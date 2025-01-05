import { Product } from "../models/product.model.js";
export const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        //stage -1
        $match: {
          inStock: true,
          price: {
            $gte: 200,
            $lt: 300,
          },
        },
      },
      //stage-2:group documents
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong!",
    });
  }
};
export const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "category 1",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          averagePrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          averagePrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong!",
    });
  }
};
export const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "product 1",
        category: "category 1",
        price: 300,
        inStock: true,
        tags: ["tag1", "tag2", "tag3"],
      },
      {
        name: "product 2",
        category: "category 2",
        price: 120,
        inStock: false,
        tags: ["tag1", "tag2", "tag3"],
      },
      {
        name: "product 3",
        category: "category 3",
        price: 350,
        inStock: true,
        tags: ["tag1", "tag2", "tag3"],
      },
      {
        name: "product 4",
        category: "category 4",
        inStock: true,
        price: 200,
        tags: ["tag1", "tag2", "tag3"],
      },
      {
        name: "product 5",
        category: "category 5",
        inStock: false,
        price: 350,
        tags: ["tag1", "tag2", "tag3"],
      },
      {
        name: "product 6",
        category: "category 6",
        inStock: true,
        price: 250,
        tags: ["tag1", "tag2", "tag3"],
      },
      {
        name: "product 7",
        category: "category 7",
        price: 270,
        inStock: true,
        tags: ["tag1", "tag2", "tag3"],
      },
      {
        name: "product 8",
        category: "category 8",
        price: 150,
        inStock: false,
        tags: ["tag1", "tag2", "tag3"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);
    res.status(201).json({
      success: true,
      data: `Inserted ${result.length} sample products`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong!",
    });
  }
};
