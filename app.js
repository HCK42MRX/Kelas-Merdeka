import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import session from 'express-session';
import timeout from 'connect-timeout'
import { registerRouter } from './routes/register.js';
import { uploadRouter } from './routes/video.js';
import { loginRouter } from './routes/login.js';
import { teachingRouter } from './routes/teaching.js';
import { courseRouter } from './routes/course.js';
import { wishlistRouter } from './routes/wishlist.js';
import { User } from './models/users.js';
import passport from 'passport';
import localStrategy from 'passport-local'
localStrategy.Strategy;

const app = express();
dotenv.config();


app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use(session({
  secret: process.env.SESSION_KEY,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // Waktu kedaluwarsa cookie di sini adalah 24 jam
  }
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());

passport.use(new localStrategy(User.authenticate()))


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

// router for API

app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/videos', uploadRouter)
app.use('/teaching', teachingRouter)
app.use('/courses', courseRouter)
app.use('/wishlist', wishlistRouter)
// Start the server
app.listen(process.env.PORT, async() => {
  try{
  await connect()
  console.log("server was listening on port " + process.env.PORT )
  }catch (err){
    console.log(err)
  }
});
