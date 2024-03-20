// multerConfig.js
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images/"); // Save uploaded files to the "images" folder
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + "-" + file.originalname;
        cb(null, fileName); // Set the filename to be unique
    },
});

const fileFilter = (req, file, cb) => {
    // Accept only JPEG, PNG, and GIF formats
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/gif"
    ) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error("Invalid file format. Only JPEG, PNG, and GIF formats are allowed."));
    }
};

const upload = multer({ storage, fileFilter });

module.exports = { upload };
