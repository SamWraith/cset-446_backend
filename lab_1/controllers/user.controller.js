import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({ error: "Please provide name, email and password" });
    }

    try {
        const user = await User.create({ name, email, password });
        if(!user){
            return res.status(500).json({ error: "Failed to create user" });
        }
        res.status(201).json({ message: "User registered successfully", data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ error: "Please provide email and password" });
    }

    try {
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordValid = await user.isPasswordCorrect(password)
        if(!isPasswordValid){
            return res.status(400).json({ error: "Invalid password" });
        }
        res.status(200).json({ message: "User logged in successfully", data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export {
    registerUser,
    loginUser,
}
