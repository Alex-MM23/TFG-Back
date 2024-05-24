import { Request, Response } from "express";
import { Category } from "../models/category";

export const getCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const listUser = await Category.findAll();
    res.json(listUser);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
    const { title, description } = req.body;
  
    if (!title || !description) {
      return res.status(400).json({ message: 'Both title and description are required' });
    }

    try {
      const category = await Category.create({ 
        title: title,
        description: description
      });

      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la categoría' });
    }
  };