
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

//const CONNECTION_URL ='mongodb+srv://GOG:bleble@cluster0.m76tc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
  console.log(`Connection is established and is running on port: ${PORT}`)
)).catch((err) => console.log(err.message));
