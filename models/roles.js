import mongoose, { Schema } from "mongoose";

const RolesScheme = new Schema({
  role: {
    type: String,
    required: true,
    default: "siswa",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const Roles = mongoose.model("roles", RolesScheme);

export { Roles };
