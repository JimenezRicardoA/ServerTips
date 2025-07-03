import { Request, Response } from 'express';
import Tip from '../models/tips.model'

export const CreateTipPayment = async (req: Request, res: Response): Promise<void> => {

    try {

        const { Cantidad, Divisiones, MetodoPago } = req.body;

        if (!Cantidad) {
            res.status(400).json({ message: 'Es Necesario agrear una cantidad de propinas' })
        } else if (!MetodoPago) {
            res.status(400).json({ message: 'No se ha agregado un metodo de pago' })
        } else if (!Divisiones) {
            res.status(400).json({ message: 'No se ha agregado el numero de Empleados' })
        }

        const DivPorPersona = Cantidad / Divisiones;

        const newTip = new Tip({
            Cantidad,
            Divisiones,
            DivPorPersona: DivPorPersona.toFixed(2),
            MetodoPago
        });

        await newTip.save();

        res.status(201).json(newTip);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el Servidor' });
    }

}

export default {
    CreateTipPayment
}