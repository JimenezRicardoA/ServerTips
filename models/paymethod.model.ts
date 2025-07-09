import mongoose, { Schema, Document } from 'mongoose';

export interface IPayMethod extends Document {
    payMethod: string;
    icon: string;
}

const PayMethodSchema: Schema<IPayMethod> = new Schema({
    payMethod: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})

const PayMethod = mongoose.model<IPayMethod>('PayMethod', PayMethodSchema);

export default PayMethod;