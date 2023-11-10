import mongoose, { Schema } from "mongoose";

const EnrollmentSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "users", required: true },
    course_id: [{ type: Schema.Types.ObjectId, ref: "courses", required: true }],
    completion_status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Enrollment = mongoose.model("enrollments", EnrollmentSchema);

export { Enrollment };
