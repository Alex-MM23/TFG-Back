import { Request, Response } from "express";
import { Category } from "../models/category";

export const getCategorys = async (req: Request, res: Response) => {
    const listCategory = await Category.findAll();

    res.json(listCategory);
}

export const createCategory = async (req: Request, res: Response) => {
    const { title, description } = req.body;
  
    try {
      const category = await Category.create({ title, description });
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la categoría' });
    }
  };