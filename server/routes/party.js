import { Router } from 'express';
import Party from '../controllers/party';

const router = Router();

router.post('/', Party.createParty);
router.get('/', Party.getAllParties);
router.get('/:id', Party.getSpecificParty);
router.patch('/:id', Party.updateParty);
router.delete('/:id', Party.deleteParty);

export default router;
