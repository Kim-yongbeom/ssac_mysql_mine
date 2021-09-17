var express = require("express");
var router = express.Router();

const boardRouter = require("./ssac/board/index");
const signinRouter = require("./ssac/signin");
const signupRouter = require("./ssac/signup");

router.use("/ssac/board", boardRouter);
router.use("/ssac/signin", signinRouter);
router.use("/ssac/signup", signupRouter);

module.exports = router;
