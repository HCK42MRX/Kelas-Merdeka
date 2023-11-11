import mongoose, { Schema } from "mongoose";

const CertificatesSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    course_id: {
      type: Schema.Types.ObjectId,
      ref: "courses",
      required: true,
    },
  },
  { timestamps: true }
);

const Certificates = mongoose.model("cerificates", CertificatesSchema);

export { Certificates };
