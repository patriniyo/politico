import { Router } from 'express';
import Party from '../controllers/party';

const router = Router();

router.post('/', Party.createParty);
router.get('/', Party.getAllParties);
router.get('/:id', Party.getSpecificParty);
router.put('/:id', Party.updateParty);
router.delete('/:id', Party.deleteParty);

// router.post('/', party.createParty);

export default router;
