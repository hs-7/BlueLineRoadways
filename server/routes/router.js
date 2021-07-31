const express = require('express');
const route = express.Router();
const services = require("../services/render")
const auth =require('../middleware/auth')

/**
 * @description Root Route
 * @method GET/
 */
route.post("/", services.homeRouters)

/**
 * @description View Services
 * @method GET
//  */
// route.post("/loginj", services.viewServices)
route.post("/login", services.login)
route.post("/register", services.register)
route.delete("/delete", auth, services.delete)


module.exports = route;