"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTiPayments = exports.CreateTipPayment = void 0;
const tips_model_1 = __importDefault(require("../models/tips.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const CreateTipPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            if (!pago.PayMethod || !mongoose_1.default.Types.ObjectId.isValid(pago.PayMethod)) {
                res.status(400).json({ message: 'Método de pago inválido o faltante en uno de los pagos' });
                return;
            }
            if (typeof pago.Pagado !== 'number' || pago.Pagado <= 0) {
                res.status(400).json({ message: 'Monto de pago inválido en uno de los pagos' });
                return;
            }
        }
        const tip = new tips_model_1.default({
            Cantidad,
            NumeroPagos: Pagos.length,
            Pagos
        });
        yield tip.save();
        res.status(201).json(tip);
    }
    catch (error) {
        console.error('Error al crear el pago de propinas:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.CreateTipPayment = CreateTipPayment;
const GetAllTiPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tips = yield tips_model_1.default.find();
        res.status(200).json(tips);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el Servidor' });
    }
});
exports.GetAllTiPayments = GetAllTiPayments;
exports.default = {
    CreateTipPayment: exports.CreateTipPayment,
    GetAllTiPayments: exports.GetAllTiPayments
};
