"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const variablesDeConfiguracion = {
    Mongo_URL: process.env.MONGODB_URI || '',
};
if (!variablesDeConfiguracion.Mongo_URL) {
    throw new Error('La Variable de Entorno MONGODB_URI no esta definida');
}
exports.default = variablesDeConfiguracion;
