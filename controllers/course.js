import { Roles } from "../models/roles.js";
import { Courses } from "../models/courses.js";

const getCourseController = async (req, res) => {
  try {
    const showAllCourses = await Courses.find({});
    return res.status(200).json({result: showAllCourses });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "gagal mengambil courses", error: err });
  }
};


const createCourseController = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({ message: "kamu belum login" });
  }

  const userId = req.user._id;

  try {
    // cek rolenya
    const role = await Roles.findOne({ user_id: userId });
    if (role.role === "siswa") {
      return res
        .status(403)
        .json({ message: "anda dilarang memasuki halaman ini " });
    }


    const newCourse = new Courses({
      instruktur: req.user.username,
      nama_course: req.body.nama_course,
      // jumlah = 0
      // rating = 0
      instruktur_id: userId,
      category: [req.body.category],
    });

    // simpan ke database
    await newCourse.save();

    return res
      .status(200)
      .json({ success: true, message: "course berhasil di buat" });
  } catch (err) {
    // jika ada kesalahan atau error
    return res
      .status(401)
      .json({
        success: false,
        message: "course tidak berhasil dibuat",
        error: err,
      });
  }
};

export { getCourseController,createCourseController };
