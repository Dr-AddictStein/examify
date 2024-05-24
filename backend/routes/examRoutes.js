import express from 'express';
import { createExam, deleteExam, getAllExams, getSingleExam, updateExam } from '../controllers/examController.js';

const router=express.Router();


router.get('/',getAllExams);
router.get('/:id',getSingleExam);


router.post('/',createExam);

router.patch('/:id',updateExam);

router.delete('/:id',deleteExam);





export default router;