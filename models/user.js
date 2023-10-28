import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  name: String,
  role: String,
  video_courses: {},
});

const Users = mongoose.model("users", usersSchema);

export { Users };
