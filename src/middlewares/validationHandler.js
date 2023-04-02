// validation file

const { registerValidtion, loginValidtion } = require("../utils/validation");

// register validation
module.exports.validationReg = (req, res, next) => {
  const { error } = registerValidtion.validate(req.body);

  if (error) {
    return res
      .status(422)
      .render("register", { message: error.details[0].message });
  } else {
    next();
  }
};

// login validation
module.exports.validationLogin = (req, res, next) => {
  const { error } = loginValidtion.validate(req.body);

  if (error) {
    return res
      .status(422)
      .render("login", { message: error.details[0].message });
  } else {
    next();
  }
};
