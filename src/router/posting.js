const express = require('express');

const router = express.Router();
const ctrl = require('../controller/posting.ctrl');


router.route('/')
    .post(ctrl.publish)
    .get(ctrl.fetchList);

router.route('/:id')
    .get(ctrl.fetchOne);


module.exports = router;