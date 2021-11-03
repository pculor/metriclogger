const isJson = require('./isJson');

const cleanData = (payload, excludes = []) => {
  const jsonPayload = (!payload.dataValues && payload)
  || (isJson(payload.toJSON()) && payload.toJSON())
  || (isJson(payload.get()) && payload.get()) || payload;
  console.log(jsonPayload);
  Object.keys(jsonPayload).forEach((key) => {
    if (excludes.includes(key)) {
      delete jsonPayload[key];
    }
  });
  return jsonPayload;
};

module.exports = cleanData;
