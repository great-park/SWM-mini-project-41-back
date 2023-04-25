const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema({
    name: String,
    content: String,
    posting_id: { type: ObjectId, ref: "Posting" },
    created_at: { type: Date, default: () => new Date() },
});

module.exports = mongoose.model("Comment", commentSchema);