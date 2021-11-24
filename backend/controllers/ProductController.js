const { Product, image } = require("../models");
const path = require("path");
class ProductController {
  static async addProduct(req, res) {
    try {
      const {
        name,
        desc,
        price,
        stock,
        publisher,
        developer,
        discount = null,
      } = req.body;

      const images = req.files;
      const product = await Product.create({
        name,
        price,
        stock,
        desc,
        publisher,
        developer,
        discount,
      });
      await images.forEach(async (i) => {
        const primary = i.originalname.includes("list") ? true : false;
        await image.create({
          filename: i.filename,
          filesize: i.size,
          filetype: path.extname(i.filename),
          path: i.path,
          primary,
          ProductId: product.id,
        });
      });

      res.status(200).json({ message: "ok" });
    } catch (error) {
      res.send({ error, message: "catch" });
    }
  }
}

module.exports = ProductController;
