// this file is act as a middleware for checking user is authenticated or not
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const isAuth = async (req, res, next) => {
  try {
    // at first get the token from the request
    const token = req.cookies.token;

    // condition checking if token not there, send message of login
    if (!token)
      return res.status(403).json({
        message: "Please Login First",
      });

    // verify the token that matches or not
    const decodedData = jwt.verify(token, process.env.Jwt_secret);

    // if deodedData is not found or not matched
    if (!decodedData)
      return res.status(403).json({
        message: "token expired",
      });

    // find the user
    req.user = await User.findById(decodedData.id);

    next();
  } catch (error) {
    res.status(500).json({
      message: "Please Login",
    });
  }
};
