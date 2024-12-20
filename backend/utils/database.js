// import mongoose from "mongoose";
// import dotenv  from "dotenv";

// dotenv.config({
//     path:"../.env"
// })

// const databaseconnnection =()=>{
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         console.log("mongoDb is Connected succesfully")
//     }).catch((err)=>{
//         console.log(err)
//     })
//     mongoose.connect('mongodb+srv://aaadea522:Adam%40123@cluster0.lmur7.mongodb.net/', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       })
//         .then(() => console.log('Database connected!'))
//         .catch(err => console.log('Database connection error:', err));
      

//     console.log(process.env.MONGO_URI)
// }

// export default databaseconnnection;

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../.env') 
});

// Check if the URI is defined
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is undefined. Check your .env file.");
}

const databaseConnection = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB is connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
};

export default databaseConnection;

