const JoisBase = require('@hapi/joi');
const JoiDate = require('@hapi/joi-date');

const Joi = JoisBase.extend(JoiDate);
const {
  createError,
  BAD_REQUEST,
  CONFLICT,
  NOT_FOUND,
  SERVER_ERROR,
  UNAUTHORIZED,
  FORBIDDEN,
} = require('../utils/error');

/**
 * Validate request body
 *
 * @param {object} payload
 * @param {object} res
 * @param {object} next
 * @param {object} schema
 */
const joiValidate = (payload, schema, req, res, next) => {
  // validate request against predefined schema
//   const payload = {
//     ...req.body, ...req.query, ...req.params, ...req.headers,
//   };
  const { error, value } = schema.validate(payload, {
    allowUnknown: true,
  });

  // TODO check for validation error
  if (error) {
    return res.status(BAD_REQUEST).json({
      error: error.message,
    });
  }
  return value;
};

module.exports = {
  joiValidate,
  Joi,
};
