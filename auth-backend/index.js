import express from 'express';
import dotenv from 'dotenv'
import connectDb from './database/db';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoutes.js'

const app = express();

// for dotenv file config, so that we can use .env file
dotenv.config() 

const port = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes for the user
app.use("/api/user", userRoutes);

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
})