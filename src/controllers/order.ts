import { Request, Response } from 'express';
import { Order } from '../models/order';
import { OrderLine } from '../models/orderLine';

export const createOrder = async (req: Request, res: Response) => {
  const { orderDate, totalAmount, userId, orderLines } = req.body;

  try {
    // Create a new order
    const order = await Order.create({
      orderDate: orderDate,
      totalAmount: totalAmount,
      userId: userId
    });

    // Create order lines
    for (const orderLine of orderLines) {
      await OrderLine.create({
        quantity: orderLine.quantity,
        price: orderLine.price,
        orderId: order.id,
        productId: orderLine.productId
      });
    }

    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error });
  }
};

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const listUser = await Order.findAll();
    res.json(listUser);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
