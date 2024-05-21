import { Request, Response } from 'express';
import { Order } from '../models/order';
import { OrderLine } from '../models/orderLine';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderDate, totalAmount, userId, orderLines } = req.body;

    // Crear una nueva orden en la base de datos
    const order = await Order.create({ orderDate, totalAmount, userId });

    // Crear las líneas de orden asociadas
    const orderLinePromises = orderLines.map((orderLine: any) => 
      OrderLine.create({ ...orderLine, orderId: order.id })
    );
    await Promise.all(orderLinePromises);

    res.status(201).json({ message: 'Orden creada exitosamente' });
  } catch (error) {
    console.error('Error al crear la orden:', error);
    res.status(500).json({ message: 'Error al procesar la orden' });
  }
};
