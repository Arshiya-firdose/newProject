import express from "express";
import userSignUpController from "../controllers/user/userSignUp.js";
import userSignInController from "../controllers/user/userSignIn.js";
import userDetailsController from "../controllers/user/userDetails.js";
import authToken from "../middleware/index.js";
import userLogout from "../controllers/user/userLogout.js";
import allUsers from "../controllers/user/allUsers.js";
import updateUserRole from "../controllers/user/updateUserRole.js";
import uploadProduct from "../controllers/product/uploadProduct.js";
import getAllProducts from "../controllers/product/getAllProduct.js";
import updateProduct from "../controllers/product/updateProduct.js";
import getProductCategory from "../controllers/product/getProductCategory.js";
import categoryWiseProducts from "../controllers/product/categoryWiseProducts.js";
import productDetails from "../controllers/product/getProductDetails.js";

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout", userLogout);

//admin-panel
router.get("/all-users", authToken, allUsers);
router.post("/updateUser-role", authToken, updateUserRole);

//product
router.post("/upload-product", uploadProduct);
router.get("/all-products", getAllProducts);
router.post("/update-product", authToken, updateProduct);
router.get("/get-productCategory",getProductCategory)
router.post("/categoryWiseProducts", categoryWiseProducts); // ✅ FIXED
router.get("/product-details/:id",productDetails)


export default router;
