import express from 'express';
import { addStudent, getStudentByPrn, updateStudentByPrn, deleteStudentByPrn } from '../controllers/studentController.js';

const router = express.Router();

// Add a student
router.post('/', addStudent);

// Get a student by PRN
router.get('/:prn', getStudentByPrn);

// Update a student by PRN
router.put('/:prn', updateStudentByPrn);

// Delete a student by PRN
router.delete('/:prn', deleteStudentByPrn);

export default router;
