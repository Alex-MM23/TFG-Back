import { Request, Response } from "express";
import { FormFormulario } from "../models/formFooter";

export const createForm = async (req: Request, res: Response) => {
    const { name, email, phone, city, coment } = req.body;
  
    if (!name || !email || !phone || !city || !coment) {
      return res.status(400).json({ message: 'Both title and description are required' });
    }

    try {
      const formFooter = await FormFormulario.create({ 
        name: name,
        email: email,
        phone: phone,
        city: city,
        coment: coment
      });

      res.status(201).json(formFooter);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la categoría' });
    }
  };