import express from 'express';
import { mongoose } from './models/database.js';

const app = express();

// Connect to the database
mongoose

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});