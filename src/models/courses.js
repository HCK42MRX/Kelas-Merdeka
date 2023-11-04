import mongoose, { Schema } from "mongoose";


const ItemCardVideo  = new Schema({
  
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
  category: [String],
  tanggal_dibuat: {
    type: Date,
    default: Date.now(),
  },
});

const Courses = mongoose.model("courses", CourseScheme);

export { Courses };
