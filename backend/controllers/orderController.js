import Order from "../models/Order.js";

export const getOrders = async (req, res) => {
  const orders = await Order.find().populate("user").populate("products.product");
  res.json(orders);
};

export const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
