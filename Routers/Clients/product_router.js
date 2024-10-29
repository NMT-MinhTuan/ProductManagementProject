const express = require('express');
const Routers = express.Router();
const controller = require("../../Controller/Clients/product.controller.js")

Routers.get('/',controller.productcontroller);
module.exports = Routers;
