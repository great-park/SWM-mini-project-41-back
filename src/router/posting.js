const express = require('express');

const router = express.Router();
const ctrl = require('../controller/posting.ctrl');

router.post('/', ctrl.publish);
router.get('/:id', ctrl.getPosting);

module.exports = router;