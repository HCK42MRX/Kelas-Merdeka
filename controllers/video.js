import { createClient } from "@supabase/supabase-js";
import { Video } from "../models/videos.js";
import { Roles } from "../models/roles.js";
import { Courses } from "../models/courses.js";
import Ffmpeg from "fluent-ffmpeg";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const uploadController = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res
      .status(401)
      .json({ success: false, message: "kamu belum login" });
  }

  const userId = req.user._id;

  const role = await Roles.findOne({user_id: userId});
  if (!role || role.role !== "instruktur") {
    return res
      .status(401)
      .json({
        success: false,
        message: "kamu harus menjadi instruktur untuk masuk ke halaman ini",
        role: role
      });
  }

  const courseId = req.params.courseId;

  const verifiedCourseId = await Courses.findOne({_id: courseId});

  if (!verifiedCourseId) {
    return res
      .status(400)
      .json({ success: false, message: "course tidak ditemukan" });
  }

  try {
    if (!req.file) {
      return res.status(400).send("Tidak ada file yang diunggah.");
    }
    const { error } = await supabase.storage
      .from("kelas-merdeka-video")
      .upload(`${req.file.originalname}`, req.file.buffer);

    if (error) {
      return res
        .status(500)
        .json({ message: "Gagal mengunggah file ke Supabase." });
    }

    const { data } = await supabase.storage
      .from("kelas-merdeka-video")
      .getPublicUrl(req.file.originalname);

    // get metadata

    Ffmpeg.ffprobe(data.publicUrl, async (err, metadata) => {
      console.log(data.publicUrl);
      const newVideo = new Video({
        title: req.body.title,
        video_url: data.publicUrl,
        duration: metadata.format.duration,
        course_id: courseId,
      });

      await newVideo.save();

      return res
        .status(200)
        .json({ message: "File berhasil diunggah ke Supabase." });
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Gagal mengunggah file ke Supabase.", err });
  }
};
export { uploadController};
