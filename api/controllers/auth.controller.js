
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if required fields are missing or empty
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

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
        res.status(500).json({ message: error.message });
    }
};
