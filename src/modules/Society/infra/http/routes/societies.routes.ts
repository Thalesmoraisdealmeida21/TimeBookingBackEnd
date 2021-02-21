import { Router } from 'express';

import SocietyController from '../controllers/SocietyController';

const societyController = new SocietyController();
const societyRouter = Router();

societyRouter.post('/', societyController.create);
societyRouter.get('/', societyController.index);

export default societyRouter;
