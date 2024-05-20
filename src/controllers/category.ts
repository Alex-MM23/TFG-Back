import { Request, Response } from "express";
import { Category } from "../models/category";

export const getCategorys = async (req: Request, res: Response) => {
    const listCategory = await Category.findAll();

    res.json(listCategory);
}