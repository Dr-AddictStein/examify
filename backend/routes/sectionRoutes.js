import express from 'express';
import { createSection, deleteSection, getAllSections, getSingleSection, updateSection } from '../controllers/sectionController.js';


const router=express.Router();


router.get('/',getAllSections)
router.get('/:id',getSingleSection)


router.post('/',createSection);

router.patch('/:id',updateSection);

router.delete('/:id',deleteSection);







export default router;