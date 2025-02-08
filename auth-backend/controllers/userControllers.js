// this file is responsible for all the user routes function

import { User } from "../models/User.js";
import TryCatch from "../utils/TryCatch.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

// function for register user
export const registerUser = TryCatch(async (req, res) => {
  // get the data from req.body
  const { name, email, password } = req.body;

  // check for all feilds
  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  // find the user based on email and store it to variable
  let user = await User.findOne({ email });

  // check condition if user already exists or not
  if (user)
    return res.status(400).json({
      message: "User Already Exists",
    });

  // store the user password in hash able way
  const hashPassword = await bcrypt.hash(password, 10);

  // if user not exists , create the new user
  user = await User.create({
    name,
    email,
    // in password we take the hash password
    password: hashPassword,
  });

  // then generate the token for the user
  generateToken(user._id, res);

  // then send the res
  res.status(201).json({
    user,
    message: "User Registered",
  });
});

// function login user
export const loginUser = TryCatch(async (req, res) => {
  // get the user data from req.body

  const { email, password } = req.body;

  // check for all feilds
  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }
  // find the user basis on email
  const user = await User.findOne({ email });

  // check condition for user is available or not
  if (!user)
    return res.status(400).json({
      message: "No User Exist",
    });

  // then compare the password with hash password
  const comparePassword = await bcrypt.compare(password, user.password);

  // check condition for the comparePassword
  if (!comparePassword)
    return res.status(400).json({
      message: "Wrong Password",
    });

  // generate the token
  generateToken(user._id, res);

  // send the user and sucess
  res.status(200).json({
    user,
    message: "User LoggedIn",
  });
});

// function for checking user profile
export const myProfile = TryCatch(async (req, res) => {
  // get the user by _id
  const user = await User.findById(req.user._id);

  // send the response of user
  res.json(user);
});

// function for logout of user
export const logoutUser = TryCatch(async (req, res) => {
  // for logout do the token age to 0 ,so user get log out
  res.cookie("token", "", { maxAge: 0 });

  res.json({
    message: "Logged Out Succesfully",
  });
});
