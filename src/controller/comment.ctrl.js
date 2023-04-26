const Comment = require('../model/comment');

const commentController = {
    fetchByPostingId: (req, res) => {
        const { posting_id } = req.query;

        Comment
        .find({ posting_id })
        .then((comments) => {
            res.status(200).json(comments);
        });
    },

    addComment: (req, res) => {
        const { name, content, posting_id } = req.body;

        const newComment = new Comment({
            name, content, posting_id
        });
      
        newComment
        .save()
        .then(comment => {
            res.status(200).json(comment);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
    },
};

module.exports = commentController;