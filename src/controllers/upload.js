import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const uploadController = async (req, res) => {
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

    const { data } = supabase.storage
      .from("kelas-merdeka-video")
      .getPublicUrl(req.file.originalname);

    return res
      .status(200)
      .json({ message: "File berhasil diunggah ke Supabase." });
  } catch (err) {
    res.status(500).json({ message: "Gagal mengunggah file ke Supabase.", err });
  }
};
export { uploadController };
