// import userModel from "../models/userModel.js"

// const allUsers=async(req,res)=>{
//     try {
//       console.log( "userid",req.userId)
//       const data=await userModel.find()
//       res.status(200).json({
//         data :data,
//         message:"all users"
//       })
//       console.log(data)
//     } catch (error) {
//         res.status(400).json({
//             message:error.message ||error,
//             error:true,
//             success:false
//         })
//     }
// }
// export default allUsers

import userModel from "../../models/userModel.js";

const allUsers = async (req, res) => {
  try {
    const data = await userModel.find();
    res.status(200).json({
      data,
      message: "All users",
      success: true,
      error: false,
    });
    console.log(data);
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
export default allUsers;
