var express = require("express");
var router = express.Router();

const AuthController = require("../../../controllers/ssac/auth/AuthController");

router.post("/", AuthController.uploadSignin);

module.exports = router;
