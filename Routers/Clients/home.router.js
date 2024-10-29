const express = require("express");
const router = express.Router();
const controller = require("../../Controller/Clients/home.controller");

router.get('/',controller.homecontroller);
module.exports  = router;