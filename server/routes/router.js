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


route.post("/register_bus", services.register_bus)
route.post("/register_stop", services.register_stop)
route.post("/register_route", services.register_route)
route.post("/register_schedule", services.register_schedule)


route.get("/busdata", services.busdata)
route.get("/stopdata", services.stopdata)
route.get("/routedata", services.routedata)
route.get("/scheduledata", services.scheduledata)

//Users APIS-->
route.post("/findschedules", services.findschedules)
route.post("/paymentgate", auth, services.paymentgate)

route.get("/users", services.getusers)
route.get("/bookings", services.getbookings)

module.exports = route;