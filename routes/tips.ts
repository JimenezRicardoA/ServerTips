import Router from 'express';

import { CreateTipPayment, GetAllTiPayments } from '../controllers/tips.controller';
import { CreatePayMethod, GetAllPayMethods } from '../controllers/paymethod.controller';

const router = Router();

router.post('/CreateTipPayment', CreateTipPayment);
router.get('/GetAllTiPayments', GetAllTiPayments);

router.post('/CreatePayMethod', CreatePayMethod);
router.get('/GetAllPayMethods', GetAllPayMethods);

export default router;