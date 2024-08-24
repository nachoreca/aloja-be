const { register, login } = require('../services/authService');
const errorHandler = require('../utils/errorHandler');

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const token = await register(username, email, password);
    res.json({ token });
  } catch (error) {
    errorHandler(res, error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.json({ token });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = { registerUser, loginUser };
