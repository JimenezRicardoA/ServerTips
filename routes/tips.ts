import Router from 'express';

import CreateTipPayment from '../controllers/tips.controller';

const router = Router();

router.post('/CreateTipPayment', CreateTipPayment.CreateTipPayment);

export default router;