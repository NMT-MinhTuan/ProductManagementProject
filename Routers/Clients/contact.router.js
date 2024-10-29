const express = require("express");
const router = express.Router();
const controller = require("../../Controller/Clients/contact.controller.js");

router.get("/",controller.contactcontroller);

module.exports = router;