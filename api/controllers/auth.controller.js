
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;

    // Check if required fields are missing or empty
    if (!username || !email || !password || username === '' || email === '' || password === '') {
       next(errorHandler(400,'All fields are required'));
    }

    try {
        // Check if a user with the same email already exists
       

        // Hash the password
        const hashedPassword = bcryptjs.hashSync(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the new user
        await newUser.save();
        res.json('Signup successful');
    } catch (error) {
        next(error);
    }
};
