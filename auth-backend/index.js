import express from 'express';
import dotenv from 'dotenv'
import connectDb from './database/db';

const app = express();

// for dotenv file config, so that we can use .env file
dotenv.config() 

const port = process.env.PORT;

// middlewares
app.use(express.json());

// routes for the user
app.use("/api/user", userRoutes);

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
})