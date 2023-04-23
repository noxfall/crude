import express from 'express';

import { addUser, getUser, delUser, updateUser, listUsers } from '../controllers/users.js';

const router = express.Router();

// Route to get/list all the users
router.get('/', listUsers);

router.get('/:id', getUser);

// Route to add users to database
router.post('/', addUser);

// Route to delete users
router.delete('/:id', delUser);

// Route to update user
router.patch('/:id', updateUser);

export default router;