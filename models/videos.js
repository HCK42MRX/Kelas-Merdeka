import mongoose, { Schema } from "mongoose";

const videoScheme = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  url_video: {
    // dummy video
    type: [String],
    required: true
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
});




const Videos = mongoose.model("videos", videoScheme);

export { Videos };
