import mongoose, { Schema, Document } from 'mongoose';

export interface ITip extends Document {
    Cantidad: number;
    Divisiones: number;
    DivPorPersona?: number;
    MetodoPago: string;
}

const TipSchema: Schema<ITip> = new Schema({
    Cantidad: {
        type: Number,
        required: true
    },
    Divisiones: {
        type: Number,
        required: true
    },
    DivPorPersona: {
        type: Number,
        required: true
    },
    MetodoPago: {
        type: String,
        required: true
    }
})

const Tip = mongoose.model<ITip>('Tip', TipSchema);

export default Tip;

