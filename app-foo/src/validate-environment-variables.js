const Joi = require("joi");

const schema = Joi.object({
  FT_HELLO_WORLD: Joi.string().optional().valid("true", "false"),
}).options({ allowUnknown: true });

const validateEnvironmentVariables = function (environment) {
  const { error } = schema.validate(environment);
  if (error) {
    throw new Error(
      "Configuration is invalid: " +
        error.message +
        ", but was: " +
        error.details[0].context.value
    );
  }
};

module.exports = validateEnvironmentVariables;
