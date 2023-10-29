import mongoose, { Schema } from "mongoose";

const courseScheme = new Schema({
  author: {
    type: String,
    required: true,
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
    title: {
      type: String,
      required: true,
    },
    url_video: {
      // dummy video
      type: [String],
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    quiz_interactive: {
      type: Boolean,
      default: false,
    },
    in_duration: [String],
    tanggal_dibuat: {
      type: Date,
      default: Date.now(),
    },
  },
  tanggal_dibuat: {
    type: Date,
    default: Date.now(),
  },
});

const Courses = mongoose.model("courses", courseScheme);

export { Courses };
