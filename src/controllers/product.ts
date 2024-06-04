import { Request, Response } from 'express';
import { Product } from '../models/product';

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Product.findAll();

    res.json(listProducts)
}

export const getProductsByCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.query;

  try {
    const products = await Product.findAll({ where: { categoryId } });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ message: 'Error fetching products by category', error });
  }
};

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

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.destroy();

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
};