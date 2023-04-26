const express = require("express");
const postingRouter = require("./posting");
const commentRouter = require("./comment");

const router = express.Router();

router.use("/posting", postingRouter);
router.use("/comment", commentRouter);

router.get('/', (req, res) => {
  res.send(
    '<h1>SWM mini project app</h1> <h4>Message: Server is alive</h4> <p>Version 1.0</p>',
  );
});

module.exports = router;