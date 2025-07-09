import mongoose, { Schema, Document, Types } from 'mongoose';
import { IPayMethod } from './paymethod.model';

export interface IPago {
    PayMethod: Types.ObjectId | IPayMethod;
    Pagado: number;
}

export interface ITip extends Document {
    Cantidad: number;
    NumeroPagos: number;
    Pagos: IPago[];
}

const TipSchema: Schema<ITip> = new Schema({
    Cantidad: {
        type: Number,
        required: true
    },
    NumeroPagos: {
        type: Number,
        required: true
    },
    Pagos: [{
        PayMethod: {
            type: Schema.Types.ObjectId,
            ref: 'PayMethod',
            required: true
        },
        Pagado: {
            type: Number,
            required: true
        }
    }]

})

const Tip = mongoose.model<ITip>('Tip', TipSchema);

export default Tip;

