import productModel from "../../models/productModel.js";

const getAllProducts = async (req, res) => {
  try {
    const AllProducts = await productModel.find();
    res.status(200).json({
      message: "All Product",
      error: false,
      success: true,
      data: AllProducts,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error in getting All Products",
      error: true,
      success: false,
    });
  }
};
export default getAllProducts;
