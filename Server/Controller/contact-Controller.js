const contact = require("../Models/contact-model");
const User = require("../Models/user-model");

const contactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            res.status(400).json({ fail: "Email does't exist" })
        }
        else {
            await contact.create({ name, email, message });
            res.status(200).json({ success: "Message sent successfully." })
        }
    } catch (error) {
        console.error("there is an error :" + error);
    }
}

module.exports = contactForm;