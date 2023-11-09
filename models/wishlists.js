import mongoose, { Schema } from "mongoose";

const WishlistSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "users" },
  course_id: [{ type: Schema.Types.ObjectId, ref: "courses" }],
});

const Wishlist = mongoose.model("wishlists", WishlistSchema);

export { Wishlist };
