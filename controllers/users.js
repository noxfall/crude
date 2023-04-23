import { v4 as uuid } from 'uuid';

let users = [];

export const listUsers = (req, res) => {
  res.send(users);
};

export const addUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  res.send(`User with the name ${user.fname} added to database!`);
};

export const getUser = (req, res) => {
  res.send(req.params.id);
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.fname = req.body.fname;
  user.lname = req.body.lname;
  user.age = req.body.age;

  res.send(`User ${user.fname} has been updated.`);
};

export const delUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);

  res.send(`User has been deleted.`);
};