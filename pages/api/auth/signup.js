import connectDb from "../../../middleware/config";
import User from "../../../models/User";
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import { validationResult, body } from 'express-validator';

const key = 'blog';
const saltRounds = 10;

const validateUserData = [
    body("name").isLength({ min: 3 }).withMessage("Invalid Name."),
    body("email").isEmail().withMessage("Invalid Email Address."),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
];

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            await Promise.all(validateUserData.map(validation => validation.run(req)));

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array().map(error => error.msg) });
            }

            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ error: "All fields are required" });
            }

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ error: "A user with this email already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            });

            await newUser.save();
            const userWithoutPassword = newUser.toObject();
            delete userWithoutPassword.password;

            // Generate a JWT token
            Jwt.sign({ userWithoutPassword }, key, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    res.json({ error: "Failed to generate JWT token",status:false });
                } else {
                    res.json({ user: userWithoutPassword,status: true, auth: token });
                }
            });
        } catch (error) {
            res.status(500).json({ error: "Server Error" });
        }
    } else {
        res.status(400).json({ error: "Please Select Appropriate Request Method!" });
    }
};

export default connectDb(handler);
