import { Wishlist } from "../models/wishlists.js";
import { Courses } from "../models/courses.js"


const getWishlistController = async (req,res) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({ message: "Kamu belum login" });
  }

  const userId = req.user._id;


  try{
    const searchWishlist = await Wishlist.findOne({user_id: userId}).populate("course_id");
    if(!searchWishlist){
      return res.status(400).json({message: "course tidak berhasil ditemukan"})
    } 

    return res.status(200).json({success: true, result: searchWishlist})
  }catch(err){
    return res.status(500).json({message: "kesalahan server"})
  }

}



const wishlistCourseController = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({ message: "Kamu belum login" });
  }

  const userId = req.user._id;
  const courseId = req.params.id;

  try {
    // Periksa apakah course ada di database
    const course = await Courses.findOne(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course tidak ditemukan" });
    }

    // Cari wishlist yang ada untuk user ini
    let userWishlist = await Wishlist.findOne({ user_id: userId });

    // Jika user belum memiliki wishlist, buat baru
    if (!userWishlist) {
      userWishlist = new Wishlist({ user_id: userId, course_id: [courseId] });
    } else {
      // Jika course sudah ada di wishlist, kirim pesan
      if (userWishlist.course_id.includes(courseId)) {
        return res.status(200).json({ message: "Course sudah ada di wishlist" });
      }
      // Jika tidak, tambahkan course ke wishlist yang ada
      userWishlist.course_id.push(courseId);
    }

    await userWishlist.save(); // Simpan perubahan ke database
    return res.status(200).json({ message: "Wishlist berhasil diperbarui" });

  } catch (err) {
    return res.status(400).json({ success: false, message: "Gagal memperbarui wishlist" });
  }
};

export { wishlistCourseController, getWishlistController };
