import mongoose, { Schema } from "mongoose";

const VideosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    video_url: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      default: 0,
    },
    course_id: {
      type: Schema.Types.ObjectId,
      ref: "courses",
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("videos", VideosSchema);

export { Video };
