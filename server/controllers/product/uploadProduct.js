import uploadProductPermissison from "../../helper/permission.js";
import productModel from "../../models/productModel.js";

const uploadProduct = async (req, res) => {
  try {
    const sessionUser = req.userId;
    if (!uploadProductPermissison(sessionUser)) {
      throw new Error("Permission denied");
    }
    const newProduct = new productModel(req.body); // Creates a new product using the received data
    await newProduct.save(); // Saves the product to the database
    res.status(200).json({
      message: "product uploaded successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
export default uploadProduct;
