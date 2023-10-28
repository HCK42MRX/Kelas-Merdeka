import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Users } from './models/user.js';


const app = express();
dotenv.config();

// Connect to the database
const connect = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_MONGODB_CONNECT_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Berhasil terkoneksi ke MongoDB');
  } catch (err) {
    console.error('Error: ' + err);
  }
};


// const user = new Users({
//   name: "budi",
//   role: "siswa",
// })


// Start the server
app.listen(process.env.PORT, async() => {
  try{
  await connect()
  // await user.save()
  console.log("server was listening on port " + process.env.PORT )
  }catch (err){
    console.log(err)
  }
});
