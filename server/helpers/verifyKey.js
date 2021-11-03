require('dotenv').config();

/**
 * verify api key
 *
 * @param {*} token
 * @returns user with specified apiKey
 */
const verifyApiKey = async (apiKey) => {
  try {
    if (!apiKey) return null;
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  verifyApiKey,
};
