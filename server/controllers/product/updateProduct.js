import uploadProductPermissison from "../../helper/permission.js";
import productModel from "../../models/productModel.js";

const updateProduct = async (req, res) => {
  try {
    const sessionUser = req.userId;

    if (!uploadProductPermissison(sessionUser)) {
      throw new Error("Permission denied");
    }
    const { _id, ...restBody } = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(_id, restBody);
    res.status(200).json({
      message: "Product updated successfully",
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
export default updateProduct;
