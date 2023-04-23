const mongoose = require("mongoose");

const postingSchema = new mongoose.Schema({
    title: String,
    content: String,
    user_name: String,
    created_at: { type: Date, default: () => new Date() },
});

module.exports = mongoose.model("Posting", postingSchema);