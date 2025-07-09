import { Request, Response } from 'express';
import Tip from '../models/tips.model'
import mongoose from 'mongoose';

export const CreateTipPayment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { Cantidad, Pagos } = req.body;

        if (!Cantidad) {
            res.status(400).json({ message: 'Es necesario agregar una cantidad de propinas' });
            return;
        }

        if (!Pagos || !Array.isArray(Pagos) || Pagos.length === 0) {
            res.status(400).json({ message: 'Se requiere al menos un pago' });
            return;
        }

        for (const pago of Pagos) {
            if (!pago.PayMethod || !mongoose.Types.ObjectId.isValid(pago.PayMethod)) {
                res.status(400).json({ message: 'Método de pago inválido o faltante en uno de los pagos' });
                return;
            }

            if (typeof pago.Pagado !== 'number' || pago.Pagado <= 0) {
                res.status(400).json({ message: 'Monto de pago inválido en uno de los pagos' });
                return;
            }
        }

        const tip = new Tip({
            Cantidad,
            NumeroPagos: Pagos.length,
            Pagos
        });

        await tip.save();

        res.status(201).json(tip);
    } catch (error) {
        console.error('Error al crear el pago de propinas:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const GetAllTiPayments = async (req: Request, res: Response): Promise<void> => {

    try {
        const tips = await Tip.find();
        res.status(200).json(tips);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el Servidor' });
    }
}

export default {
    CreateTipPayment,
    GetAllTiPayments
}