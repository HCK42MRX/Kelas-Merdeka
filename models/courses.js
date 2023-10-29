import mongoose, { Schema } from "mongoose";


const ItemCardVideo  = new Schema({
  title: {
    type: String,
    required: true,
  },
  url_video: {
    // dummy video
    type: String,
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
  in_duration: String,
  tanggal_dibuat: {
    type: Date,
    default: Date.now(),
  },
})


const CourseScheme = new Schema({
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
  cardVideo: [ItemCardVideo],
  tanggal_dibuat: {
    type: Date,
    default: Date.now(),
  },
});

const Courses = mongoose.model("courses", CourseScheme);

export { Courses };
