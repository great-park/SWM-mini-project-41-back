const Posting = require('../model/posting');

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
    
}

module.exports = postingController;