import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { loginRouter } from './src/routes/login.js';
import { signUpRouter } from './src/routes/sign-up.js';
import { uploadRouter } from './src/routes/upload.js';

const app = express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended : true}))

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

// router for website

app.use('/login', loginRouter)
app.use('/sign-up', signUpRouter)
app.use('/upload', uploadRouter)

// Start the server
app.listen(process.env.PORT, async() => {
  try{
  await connect()
  console.log("server was listening on port " + process.env.PORT )
  }catch (err){
    console.log(err)
  }
});
