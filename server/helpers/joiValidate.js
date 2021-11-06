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
    const errors = error.details.map((current) => current.message.replace(/['"]/g, ''));
    // return errors[0];
    return createError(errors[0], 400);
    // return res.status(BAD_REQUEST).json({
    //   error: errors[0],
    // });
  }

  return value;
};

module.exports = {
  joiValidate,
  Joi,
};
