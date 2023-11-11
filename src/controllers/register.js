import { User } from "../models/users.js";
import { Roles } from "../models/roles.js"; 

const registerController = async (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(400).json({ message: "kamu sudah login." });
  }

  const newUser = new User({
    username: req.body.username,
    full_name: req.body.full_name,
    email: req.body.email,
  });

  try {
    const user = await User.register(newUser, req.body.password);
    const addRoles = new Roles({ user_id: user._id });
    await addRoles.save();

    return res.status(201).json({ success: true, message: "akun berhasil dibuat" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Akun tidak berhasil dibuat kemungkinan akun sudah dibuat sebelumnya mohon rubah email atau usernamenya",
    });
  }
};

export { registerController };
