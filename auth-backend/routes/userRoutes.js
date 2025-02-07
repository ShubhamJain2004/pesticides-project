// in this file all the user realted routes are there

import express from 'express';
import {isAuth} from "../middlewares/isAuth.js"

const router = express.Router();

// route for register user
router.post("/register", registerUser);

// route for login of user
router.post("/login", loginUser);

// route for user profile, this is protectd route as it includes isAuth i.e middleware
router.get("/me", isAuth, myProfile);

// route for logout of user this is protectd route as it includes isAuth i.e middleware
router.get("/logout", isAuth, logoutUser);

export default router;