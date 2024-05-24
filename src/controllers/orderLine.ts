import { OrderLine } from "../models/orderLine";
import { Request, Response } from "express";

export const getOrdeline = async (req: Request, res: Response) => {
    const listOrderLine = await OrderLine.findAll();

    res.json(listOrderLine);
}