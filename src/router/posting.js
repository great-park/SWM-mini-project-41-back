const express = require('express');

const router = express.Router();
const ctrl = require('../controller/posting.ctrl');

router.post('/', ctrl.publish);
router.get('/', ctrl.fetchList);
router.get('/:id', ctrl.fetchOne);
router.post('/comment', ctrl.addComment);

module.exports = router;