const Posting = require('../model/posting');
const Comment = require('../model/comment');

const postingController = {
    publish: (req, res) => {
        const { title, content, user_name } = req.body;

        const posting = new Posting({
            title, content, user_name
        });

        posting
        .save()
        .then((posting) => {
            res.status(200).json(posting);
        });
    },

    fetchOne: (req, res) => {
        const { id } = req.params;

        Posting
        .findById(id)
        .populate('comments')
        .then((posting) => {
            res.status(200).json(posting);
        });
    },

    fetchList: (req, res) => {
        Posting
        .find({}, {title: 1})
        .then((postings) => {
            res.status(200).json(postings);
        });
    },

    addComment: (req, res) => {
        const { name, content, posting_id } = req.body;

        const newComment = new Comment({
          name, content, posting_id
        });
      
        newComment.save()
          .catch(err => {
            res.status(500).json({ error: err.message });
          });
      }
}

module.exports = postingController;