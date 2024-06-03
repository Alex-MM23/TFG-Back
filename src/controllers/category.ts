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

  export const deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const category = await Category.findByPk(id);
  
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      await category.destroy();
  
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ message: 'Error deleting category', error });
    }
  };