require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./Router/auth");
const adminRoute = require("./Router/admin-route"); // Ensure this path is correct
const conDB = require("./Utils/Db");
const cors = require('cors');

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    methods: "GET,POST,DELETE,PUT,HEAD",
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.use("/admin", adminRoute); // Mounting admin routes at /admin

const PORT = 3000;

conDB().then(async () => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log(`The server is running at port ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
});
