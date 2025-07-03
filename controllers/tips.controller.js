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
exports.CreateTipPayment = void 0;
const tips_model_1 = __importDefault(require("../models/tips.model"));
const CreateTipPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Cantidad, Divisiones, MetodoPago } = req.body;
        if (!Cantidad) {
            res.status(400).json({ message: 'Es Necesario agrear una cantidad de propinas' });
        }
        else if (!MetodoPago) {
            res.status(400).json({ message: 'No se ha agregado un metodo de pago' });
        }
        else if (!Divisiones) {
            res.status(400).json({ message: 'No se ha agregado el numero de Empleados' });
        }
        const DivPorPersona = Cantidad / Divisiones;
        const newTip = new tips_model_1.default({
            Cantidad,
            Divisiones,
            DivPorPersona: DivPorPersona.toFixed(2),
            MetodoPago
        });
        yield newTip.save();
        res.status(201).json(newTip);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el Servidor' });
    }
});
exports.CreateTipPayment = CreateTipPayment;
exports.default = {
    CreateTipPayment: exports.CreateTipPayment
};
