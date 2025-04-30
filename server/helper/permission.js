import userModel from "../models/userModel.js";

const uploadProductPermissison = async(userId) => {
    const user = await userModel.findById(userId)

    if(user?.role === 'ADMIN'){
        return true
    }

    return false
}
export default uploadProductPermissison;
