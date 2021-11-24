const ProductController = require("../controllers/ProductController");
const uploads = require("../middleware/multer");

const productRoute = require("express").Router();

//tinggal check auth untuk upload buat admin
productRoute.get("/", ProductController.getAllProduct);
productRoute.post(
  "/add",
  uploads.array("image", 6),
  ProductController.addProduct
);

module.exports = productRoute;
