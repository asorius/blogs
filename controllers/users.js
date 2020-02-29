const usersRouter = require('express').Router();
const User = require('../modules/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
usersRouter.post('/', async (request, response) => {
  try {
    const saltRounds = 8;
    const jwtKey = process.env.TOKEN_KEY;
    const { name, username, password } = request.body;
    if (name.length <= 3 || username.length <= 3) {
      return response
        .status(400)
        .json({ error: 'user and name must be at least 3 characters long' });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userObject = { name, username, password: hashedPassword };
    const token = jwt.sign({ username, password: hashedPassword }, jwtKey);
    const newUser = new User({ ...userObject, token });
    const res = await newUser.save();
    response.status(200).json(res.toJSON());
  } catch (error) {
    response.json(error);
  }
});
usersRouter.get('/', async (request, response, next) => {
  try {
    const users = await User.find().populate('blogs', {
      url: 1,
      title: 1,
      author: 1,
      id: 1
    });
    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
});
module.exports = usersRouter;
