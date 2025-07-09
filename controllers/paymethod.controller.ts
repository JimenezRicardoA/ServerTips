import { Request, Response } from 'express';
import PayMethod from '../models/paymethod.model';


export const CreatePayMethod = async (req: Request, res: Response): Promise<void> => {
    try {

        const { payMethod, icon } = req.body;

        if (!payMethod || !icon) {
            res.status(400).json({ message: 'Es Necesario llenar todos los campos' })
            return;
        }

        const newPayMethod = new PayMethod({
            payMethod,
            icon
        });

        await newPayMethod.save();

        res.status(201).json({ newPayMethod });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el Servidor' });
    }
}

export const GetAllPayMethods = async (req: Request, res: Response): Promise<void> => {
    try {
        const paymethods = await PayMethod.find();
        res.status(200).json(paymethods);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el Servidor' });
    }
}

export default {
    CreatePayMethod,
    GetAllPayMethods
}