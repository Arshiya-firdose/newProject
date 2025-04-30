import productModel from './../../models/productModel.js';

const categoryWiseProducts = async (req, res) => {
    try {
        console.log("Incoming Request Body:", req.body); // Debug input
        const { category } = req.body;
        const cleanCategory = category.trim(); // Remove spaces

        if (!cleanCategory) {
            return res.status(400).json({
                message: "Category is required",
                error: true,
                success: false,
            });
        }

        console.log("Searching for category:", cleanCategory); // Debug log
        const products = await productModel.find({ category: cleanCategory });

        console.log("🔍 Found Products:", products.length, products); // Debug output

        return res.json({
            data: products, // Ensure it's an array
            message: "Products fetched successfully",
            success: true,
            error: false,
        });
    } catch (err) {
        console.error("🚨 Error Fetching Products:", err);
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
};



export default categoryWiseProducts;
