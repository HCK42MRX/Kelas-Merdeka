import { Roles } from "../models/roles.js";

const teachingController = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({ message: "kamu belum login" });
  }

  const userId = req.user._id;
  const roleInstruktur = "instruktur";

  try {
    const role = await Roles.findOne({ user_id: userId });
    // update role user
    if (role.role === roleInstruktur) {
      return res.status(200).json({ message: "anda sudah menjadi instruktur" });
    }
    // mengganti role menjadi instruktur
    role.role = roleInstruktur;

    // menyimpan role baru
    await role.save();
    return res
      .status(200)
      .json({ message: "role anda sudah diubah menjadi instruktur", role});
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "gagal mendapatkan role user",
      error: err,
    });
  }
};

export { teachingController };
