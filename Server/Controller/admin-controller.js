const Contact = require("../Models/contact-model");
const User = require("../Models/user-model");

// Get all users
const allUser = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// get a user by ID
// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id, { password: 0 });  // Exclude password

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log(user);  // Log the user details
        return res.status(200).json(user);  // Return the user details
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


// Delete a user by ID
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


// Get all contact messages
const allMessage = async (req, res) => {
    try {
        const messages = await Contact.find();
        
        if (!messages || messages.length === 0) {
            return res.status(404).json({ message: "No messages found" });
        }
        
        return res.status(200).json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { allUser, allMessage, deleteUserById ,getUserById};
