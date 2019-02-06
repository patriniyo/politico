import { Router } from 'express';
import party from '../controllers/party';

const router = Router();

router.post('/', party.createParty);

export default router;
