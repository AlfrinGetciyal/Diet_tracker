const express = require("express");
const router = express.Router();
const { createAccount } = require("../controllers/accountController");

router.post("/signup", createAccount);

module.exports = router;
