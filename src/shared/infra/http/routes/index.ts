import { Router } from 'express';
import societyRouter from '@modules/Society/infra/http/routes/societies.routes';

const routes = Router();

routes.use('/societies', societyRouter);

export default routes;
