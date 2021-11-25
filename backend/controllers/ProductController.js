const { Product, image, ProductGenre, Genre } = require("../models");
const path = require("path");
class ProductController {
  static async getAllProduct(req, res) {
    try {
      let results = await Product.findAll({ include: [image] });
      const res2 = await ProductGenre.findAll({ include: [Genre, Product] });

      results.forEach((result, index) => {
        let tempGenres = [];
        res2.forEach((item) => {
          if (result.id === item.ProductId) {
            tempGenres.push(item.Genre.name);
          }
        });

        results[index].dataValues.genres = tempGenres;
        tempGenres = [];
      });

      res.status(200).json({ results, res2 });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
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
        genresId,
      } = req.body;
      // console.log(name, price, stock);
      const images = req.files;
      if (!genresId) {
        res.status(400).json("Genre must be checked");
      }
      if (!images) {
        res.status(400).json("Need upload image");
      }
      const product = await Product.create({
        name,
        price,
        stock,
        desc,
        publisher,
        developer,
        discount,
      });

      // console.log(genresId);
      await genresId.forEach(async (genre) => {
        await ProductGenre.create({
          ProductId: product.id,
          GenreId: Number(genre),
        });
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
      res.status(500).json({ error, message: "catch" });
    }
  }
  static async editProductGet(req, res) {
    try {
      const id = +req.params.id;
      let product = await Product.findOne({ where: { id }, include: [image] });
      let genres = await ProductGenre.findAll({
        where: { ProductId: id },
        include: [Genre],
      });
      let allGenres = await Genre.findAll();
      genres = genres.map((item) => {
        return item.Genre.name;
      });
      product.dataValues.genres = genres;
      res.status(200).json({ product, allGenres });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async editProductPut(req, res) {
    try {
      const id = +req.params.id;
      const {
        name,
        price,
        stock,
        desc,
        publisher,
        developer,
        discount = null,
      } = req.body;
      await Product.update(
        { name, price, stock, desc, publisher, developer, discount },
        { where: { id } }
      );

      res.status(200).json({ message: `Success updated id ${id}` });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async deleteProduct(req, res) {
    try {
      const id = +req.params.id;
      await Product.destroy({ where: { id } });
      await image.destroy({ where: { ProductId: id } });
      await ProductGenre.destroy({ where: { ProductId: id } });
      res.status(200).json({ message: `Success delete id ${id}` });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = ProductController;
