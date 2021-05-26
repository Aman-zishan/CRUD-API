import express from 'express';
import { getUser, createUser, getUserbyId, deleteUser, editUser } from '../controllers/users.js';



const router = express.Router();

router.get('/',getUser);
router.post('/',createUser);
router.get('/:id',getUserbyId);
router.delete('/:id',deleteUser);
router.patch('/:id',editUser);

export default router;