import mongoose, { Schema } from "mongoose";

const CourseScheme = new Schema(
  {
    instruktur: {
      type: String,
      required: true,
    },
    nama_course: {
      type: String,
      required: true,
    },
    jumlah_video: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    instruktur_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Courses = mongoose.model("courses", CourseScheme);

export { Courses };
