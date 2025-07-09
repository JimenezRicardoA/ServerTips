"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tips_controller_1 = require("../controllers/tips.controller");
const paymethod_controller_1 = require("../controllers/paymethod.controller");
const router = (0, express_1.default)();
router.post('/CreateTipPayment', tips_controller_1.CreateTipPayment);
router.get('/GetAllTiPayments', tips_controller_1.GetAllTiPayments);
router.post('/CreatePayMethod', paymethod_controller_1.CreatePayMethod);
router.get('/GetAllPayMethods', paymethod_controller_1.GetAllPayMethods);
exports.default = router;
