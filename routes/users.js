import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [

];

// Route to get/list all the users
router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// Route to add users to database
router.post('/', (req, res) => {
  const user = req.body;
  const userId = uuidv4();

  const userWithId = { ...user, id: userId };

  users.push(userWithId);

  res.send('User created.')
  console.log(users);
});

// Route to delete users
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with ID: ${id} deleted.`);
});

// Route to update user
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { fname, lname, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (fname) {
    user.fname = fname;
  }

  if (lname) {
    user.lname = lname;
  }

  if (age) {
    user.age = age;
  }

  res.send('User updated.');

});

export default router;