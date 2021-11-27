const OrderController = require("../controllers/OrderController");
const orderRoute = require("express").Router();

orderRoute.get("/", OrderController.getAllOrder);
orderRoute.post("/add", OrderController.addOrder);
orderRoute.post("/user", OrderController.getUserOrders);

module.exports = orderRoute;
