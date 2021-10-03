import { Router } from 'express';
import { BmwController } from '@controllers/BmwController';
import { validateSchema } from '@helpers/validateSchema';
import { bmwGetSchema } from '@helpers/validations/bmwGetValidations';

const router = Router();

router.get('/getBmw', validateSchema(bmwGetSchema), BmwController.show);

export default router;
