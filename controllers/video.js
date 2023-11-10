import { createClient } from "@supabase/supabase-js";
import { Video } from "../models/videos.js";
import { Roles } from "../models/roles.js";
import { Courses } from "../models/courses.js";
import Ffmpeg from "fluent-ffmpeg";
import dotenv from "dotenv";
import Readable from "stream";
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const uploadController = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({ message: "kamu belum login" });
  }

  const userId = req.user._id;

  const role = await Roles.findOne({ user_id: userId });
  if (role.role !== "instruktur") {
    return res
      .status(401)
      .json({ message: "anda dilarang masuk ke halaman ini" });
  }

  const courseId = req.params.courseId;

  const verifiedCourseId = await Courses.findById(courseId);

  if (!verifiedCourseId) {
    return res
      .status(400)
      .json({ success: false, message: "course tidak ditemukan" });
  }

  try {
    if (!req.file) {
      return res.status(400).send("Tidak ada file yang diunggah.");
    }
    if (req.file.mimetype !== "video/mp4") {
      return res.status(400).send("file video harus berupa video mp4");
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
export { uploadController };
