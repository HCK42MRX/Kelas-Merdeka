import mongoose, { Schema } from "mongoose";

const courseScheme = new Schema({
  author: {
    type: String,
    required: true
  },
  nama_course: {
    type: String,
    required: true,
  },
  rating: String,
  tag: {
    type: [String],
    required: true,
  },
  card_video: {
    // dummy card_video
    type: [String],
    required: true
  },
  tanggal_dibuat: {
    type: Date,
    default: Date.now()
  }
});




const Courses = mongoose.model("courses", courseScheme);

export { Courses };
