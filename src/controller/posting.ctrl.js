const Posting = require('../model/posting');

const postingController = {
    publish: (req, res) => {
        const { title, content, user_name } = req.body;

        const posting = new Posting({
            title,
            content,
            user_name
        });

        posting
        .save()
        .then((posting) => {
            res.status(200).json(posting);
        });
    },

    getPosting: (req, res) => {
        const { id } = req.params;

        Posting
        .findById(id)
        .then((posting) => {
            res.status(200).json(posting);
        });
    }
}

module.exports = postingController;