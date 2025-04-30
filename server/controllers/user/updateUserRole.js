import userModel from "../../models/userModel.js";
async function updateUserRole(req, res) {
  try {
    const sessionUser = req.userId;
    const { id, name, email, role } = req.body;

    const user = await userModel.findById(sessionUser);
    console.log("user.role", user.role);

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { name, email, role },
      { new: true }
    );
    res.status(200).json({
      message: "user updated successfuly",
      data: updatedUser,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

export default updateUserRole;
