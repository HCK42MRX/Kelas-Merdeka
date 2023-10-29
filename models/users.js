import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "siswa",
    required: true,
  },
  courses_yang_dimiliki: [String],
  wishlist: [String], 
});
const Users = mongoose.model("users", UsersSchema);

export { Users };
