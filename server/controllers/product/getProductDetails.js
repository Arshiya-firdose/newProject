import productModel from "../../models/productModel.js"

const productDetails=async(req,res)=>{
    try {
     const {id}=req.params
     console.log(id)
     const data=await productModel.findById(id)

     res.status(200).json({
        message:'Ok',
        success:true,
        data:data,
        error:false
     })
     } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
          });
        
    }
}
export default productDetails