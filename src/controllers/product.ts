import { Request, Response } from 'express';
import { Product } from '../models/product';

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Product.findAll();

    res.json(listProducts)
}

export const createProduct = async (req: Request, res: Response) => {
    const { name, description, price, title, cantidad, categoryId } = req.body;

    if (!name || !description || !price || !title || !cantidad || !categoryId) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }
  
    if (typeof cantidad !== 'number' || cantidad < 0) {
      return res.status(400).json({ message: 'Cantidad must be a non-negative number' });
    }
  
    if (typeof categoryId !== 'number' || categoryId <= 0) {
      return res.status(400).json({ message: 'CategoryId must be a positive number' });
    }

    try {

        const product = await Product.create({
            name: name,
            description: description,
            price: price,
            title: title,
            cantidad: cantidad,
            categoryId: categoryId
        })
        res.status(201).json({ message: 'Order created successfully', product });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error });
  }
    
}