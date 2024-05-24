import express from 'express';
import { createModule, deleteModule, getAllModules, getSingleModule, updateModule } from '../controllers/moduleController.js';



const router=express.Router();


router.get('/',getAllModules)
router.get('/:id',getSingleModule)


router.post('/',createModule);

router.patch('/:id',updateModule);

router.delete('/:id',deleteModule);







export default router;