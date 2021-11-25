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
productRoute.get("/edit/:id", ProductController.editProductGet);
productRoute.put("/edit/:id", ProductController.editProductPut);
productRoute.delete("/delete/:id", ProductController.deleteProduct);

module.exports = productRoute;
