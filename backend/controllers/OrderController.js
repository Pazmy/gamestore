const { Order, ProductOrder, User, Product } = require("../models");

class OrderController {
  static async getAllOrder(req, res) {
    try {
      const data = await Order.findAll();
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async addOrder(req, res) {
    try {
      const { products, total, user } = req.body;
      const userResult = await User.findOne({ where: { email: user.email } });
      const orderResult = await Order.create({ total, UserId: userResult.id });
      await products.forEach(async (product) => {
        await ProductOrder.create({
          ProductId: product.id,
          OrderId: orderResult.id,
        });
      });
      res.status(200).json({ message: "Success" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async getUserOrders(req, res) {
    try {
      const { email } = req.body;
      console.log(email);
      const userResult = await User.findOne({ where: { email } });
      let AllProductOrders = await ProductOrder.findAll({
        include: [Product, Order],
      });
      let filterProductOrders = AllProductOrders.filter((item) => {
        if (item.Order.UserId == userResult.id) {
          return item;
        }
      });
      let results = [];
      let tempOrderId = 0;
      let tempObj = {};
      filterProductOrders.forEach((item) => {
        if (tempOrderId != item.OrderId) {
          tempObj = {};
          tempObj.orderId = item.OrderId;
          tempObj.orderDetail = item.Order;
          tempObj.products = [];
          tempObj.products.push(item.Product);
          results.push(tempObj);
          tempOrderId = item.OrderId;
        } else {
          tempObj.products.push(item.Product);
        }
      });

      res.status(200).json({ results });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = OrderController;
