const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { logger } = require("./winston");

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
            logger.info('MongoDB Connected.');
        });
    }
};