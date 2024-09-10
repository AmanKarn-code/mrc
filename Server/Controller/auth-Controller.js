const bcrypt = require("bcrypt");
const User = require("../Models/user-model");

// home page
const home = async (req, res) => {
    try {
        res.status(200).send("This is from controller.");
    } catch (error) {
        res.status(400).send({ msg: "The page is not found." });
    }
};

// registration
const register = async (req, res) => {
    try {
        const { username, email, phone, password, address } = req.body;
        const ifExist = await User.findOne({ email });

        // if user exists
        if (ifExist) {
            return res.status(400).send("Email already exists. Please try with another email.");
        }

        // encrypting the password
        const saltRound = await bcrypt.genSalt(10);
        const encryptedPass = await bcrypt.hash(password, saltRound);

        // create new user
        const userCreated = await User.create({
            username,
            email,
            phone,
            password: encryptedPass,
            address
        });

        res.status(200).json({
            msg: "Registered successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
        console.log(req.body);

    } catch (error) {
        res.status(400).send("There was an error during registration.");
        console.error("Registration Error: ", error);
    }
};

// login page
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        // if user doesn't exist
        if (!userExist) {
            return res.status(400).json({ error: "Invalid email or password." });
        }

        // verify password
        const isPass = await bcrypt.compare(password, userExist.password);
        if (isPass) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
                userName: userExist.username,
                email:userExist.email.toString(),
                isAdmin:userExist.isAdmin,
            });
        } else {
            res.status(400).json({ error: "Invalid email or password." });
        }

    } catch (error) {
        console.error("Login Error: ", error);
        res.status(500).send("Server error during login.");
    }
};

module.exports = { home, register, login };
