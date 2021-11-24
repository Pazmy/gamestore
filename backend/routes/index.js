const router = require("express").Router();

const userRoute = require("./userRoute");
router.use("/users", userRoute);

const productRoute = require("./productRoute");
router.use("/products", productRoute);

module.exports = router;
