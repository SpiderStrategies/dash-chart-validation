var revalidator = require('revalidator')
  , schema = require('./schema')

/*
 * Ensures the object is within our validate format
 */
module.exports = function (object) {
  return revalidator.validate(object, schema, { cast: true })
}
