const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET_KEY;
/**
 *
 *
 * @param {*} payload from id and username
 * @returns token
 */
const createToken = (payload) => {
  const token = jwt.sign(payload, SECRET, {
    expiresIn: 60 * 60 * 1440,
  });
  return token;
};
/**
 * Decodes user token
 *
 * @param {*} token
 * @returns decoded token
 */
const decodeToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, SECRET);
    if (decoded) {
      return decoded;
    }
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};
/**
 * verify user token
 *
 * @param {*} token
 * @returns user with specified id in token
 */
const verifyToken = async (token) => {
  try {
    if (!token) return null;
    const { __id } = await decodeToken(token);
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createToken,
  verifyToken,
  decodeToken,
};
