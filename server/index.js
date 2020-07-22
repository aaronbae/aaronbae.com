// Environment settings
import { } from 'dotenv/config'

// Backend 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './DB';

// Routes
import defaultRoute from './routes/Default.route';
import postRoute from './routes/Post.route';
import userRoute from './routes/User.route';
import fileRoute from './routes/File.route';

// Configure Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, config.options).then(
  () => {
    console.log(config.DB)
    console.log('Database is connected')
  },
  err => { console.log('Cannot connect to the database\n' + err) }
);

// Boiler Plate
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Back End Routes
app.use('/api/posts', postRoute);
app.use('/api/users', userRoute);
app.use('/api/files', fileRoute);

// Front End Serving
app.use(express.static('./build'));
app.use("/", defaultRoute);

const PORT = process.env.NODE_ENV === "production" ? 3000 : 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});