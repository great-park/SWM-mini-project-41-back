const express = require('express');

const router = express.Router();
const ctrl = require('../controller/comment.ctrl');


router.route('/')
    .get(ctrl.fetchByPostingId)
    .post(ctrl.addComment);

    
module.exports = router;