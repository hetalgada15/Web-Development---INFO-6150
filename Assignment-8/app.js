const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/WebDesign";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
    console.log("connected...");
});

app.use(express.json());

const userRouter = require("./routes/user");
app.use("/user", userRouter); // Use the user.js router for /user endpoint

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
