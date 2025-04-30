import productModel from "../../models/productModel.js";

const getProductCategory = async (req, res) => {
  try {
    // Fetch distinct categories
    const categories = await productModel.distinct("category");

    // Array to store products by category
    const productsByCategory = [];

    // Fetch one product per category
    for (const category of categories) {
      const product = await productModel.findOne({ category }); // Await the result
      if (product) {
        productsByCategory.push(product);
      }
    }

    // Send response
    res.status(200).json({
      message: "Categories fetched successfully",
      success: true,
      error: false,
      data: productsByCategory,
    });
  } catch (error) {
    // Handle errors
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export default getProductCategory;
