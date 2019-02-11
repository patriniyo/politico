import { Router } from 'express';
import Office from '../controllers/office';

const router = Router();

router.post('/', Office.createPoliticalOffice);
router.get('/', Office.getAllPoliticalOffices);
router.get('/:id', Office.getSpecificOffice);

export default router;
