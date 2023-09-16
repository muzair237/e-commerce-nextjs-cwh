import connectDb from "../../../middleware/config";
import User from "../../../models/User";
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import { validationResult, body } from 'express-validator';
const key = 'blog';

const validateLoginData = [
    body("email").notEmpty().withMessage("Invalid Username or Email."),
    body("password").notEmpty().withMessage("Password must be at least 6 characters long.")
];

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            await Promise.all(validateLoginData.map(validation => validation.run(req)));

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array().map(error => error.msg) });
            }

            const { email, password } = req.body;

            const user = await User.findOne({
                $or: [{ email: email }]
            });

            if (!user) {
                return res.status(400).json({ error: "Invalid Email Address." });
            }

            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (!isPasswordMatch) {
                return res.status(400).json({ error: "Invalid Password." });
            } else {
                const userWithoutPassword = user.toObject();
                delete userWithoutPassword.password;

                // Generate a JWT token
                Jwt.sign({ userWithoutPassword }, key, { expiresIn: "2h" }, (err, token) => {
                    if (err) {
                        res.json({ error: "Failed to generate JWT token",status:false });
                    } else {
                        res.json({ user: userWithoutPassword, status: true, auth: token });
                    }
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server error." });
        }
    } else {
        res.status(400).json({ error: "Please Select Appropriate Request Method!" });
    }
};

export default connectDb(handler);
