import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

// Start the server
app.listen(3000, () => {
  connect()
    .then(() => {
      console.log('Server is listening on port 3000');
    })
    .catch((err) => {
      console.error('Error starting the server: ' + err);
    });
});
