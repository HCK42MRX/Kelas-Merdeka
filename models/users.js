import mongoose, { Schema } from "mongoose"; 
import passportLocalMongoose from "passport-local-mongoose"; 


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // password sudah dibuatkan otomatis oleh passport :)

});

UserSchema.plugin(passportLocalMongoose); 

const User = mongoose.model("users", UserSchema);

export { User };
