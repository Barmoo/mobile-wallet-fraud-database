
import { Router } from "express";

import{login} from '../controllers/admin_controller.js';

const adminRouter = Router();

adminRouter.post('/api/admin/login', login);

export default adminRouter;