const loginRouter = require('express').Router();
const User = require('../modules/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
loginRouter.post('/', async (request, response) => {
  try {
    const jwtKey = process.env.TOKEN_KEY;
    const { username, password } = request.body;
    const user = await User.findOne({ username: username });
    console.log(request.token, user.toJSON());
    const passwordCheck = await bcrypt.compare(password, user.password);
    const token = request.token
      ? request.token
      : jwt.sign({ username, password: user.password }, jwtKey);
    console.log(token);
    if (passwordCheck) {
      response.status(200).json({ lol: true });
    } else {
      response.status(401).json({ error: 'bad username or password' });
    }
  } catch (error) {
    response.json(error);
  }
});

module.exports = loginRouter;
