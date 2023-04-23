const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    connect: () => {
        mongoose.connect(
            process.env.MONGODB_HOST,
            {
                user: process.env.MONGODB_USER,
                pass: process.env.MONGODB_PASS,
            }
        )
        .then(() => {
            console.log('MongoDB Connected.');
        });
    }
};