import { Router } from 'express';
import { boilerplateController } from './controller/boilerplate-controller';

// Router
const router = Router();
const baseUrl = '/api/boilerplate';

router.get(`${baseUrl}`, boilerplateController.find);

export const boilerplateClientRouter = router;
