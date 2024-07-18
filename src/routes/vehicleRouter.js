import { Router } from 'express';
import { getVehicleStatus } from '../controllers/vehicleControllers.js';
const router = Router();

router.get('/vehicle/status', getVehicleStatus);

export default router;
