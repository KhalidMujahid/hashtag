const { Router } = require("express");
const { loggedHandler } = require("../middlewares/loggedHandler");
const {
  validationReg,
  validationLogin,
} = require("../middlewares/validationHandler");
const Customer = require("../models/Customer");

const router = Router();

// base (GET)
router.get("/", (req, res, next) => {
  try {
    if (req.session.isLoggedIn) {
      res.redirect("/dashboard");
    } else {
      return res.status(200).render("index");
    }
  } catch (error) {
    next(error);
  }
});

// dashboard (GET)
router.get("/dashboard", loggedHandler, (req, res, next) => {
  try {
    // if (req.session) {
    return res.status(200).render("dashboard", { user: req.session.user });
    // } else {
    // res.status(302).redirect("/");
    // }
  } catch (error) {
    next(error);
  }
});

// portfolio (GET)
router.get("/portfolio", loggedHandler, (req, res, next) => {
  try {
    // if (req.session) {
    return res.status(200).render("dashboard/portfolio");
    // } else {
    // res.status(302).redirect("/");
    // }
  } catch (error) {
    next(error);
  }
});

// profile (GET)
router.get("/profile", loggedHandler, (req, res, next) => {
  try {
    // if (req.session) {
    return res.status(200).render("dashboard/profile");
    // } else {
    // res.status(302).redirect("/");
    // }
  } catch (error) {
    next(error);
  }
});

//logout (GET)
router.get("/logout", (req, res, next) => {
  try {
    if (req.session.isLoggedIn) {
      req.session.destory();
      // res.destroy();
      res.redirect("/login");
    }
  } catch (error) {
    next(error);
  }
});

// portfolio details (GET)
router.get("/details", (req, res) => {
  res.status(200).render("portfolio-details");
});

// register route (GET)
router.get("/register", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/dashboard");
  } else {
    return res.render("register", { message: null, success: null });
  }
  // res.status(200).render("register", { message: null, success: null });
});

// login route (GET)
router.get("/login", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/dashboard");
  } else {
    return res.render("login", { message: null });
  }
  // res.status(200).render("login", { message: null });
});

// contact form (POST)
router.post("/submit", async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
  }
});

// register (POST)
router.post("/register", validationReg, async (req, res, next) => {
  try {
    const { fname, lname, whatsapp_number, skills, email, password } = req.body;

    // check if Email already exits
    const checkEmailExit = await Customer.findOne({ email });

    if (checkEmailExit)
      return res.status(400).render("register", {
        message: "An account with this email already exit!",
        success: null,
      });

    // save the details
    const customer = await Customer.create({
      fname,
      lname,
      whatsapp_number,
      skills,
      email,
      password,
    });

    if (customer) {
      return res
        .status(201)
        .render("register", { success: "Account created", message: null });
    } else {
      return res.status(400).render("register", {
        message: "An error occured please try again later",
        success: null,
      });
    }
  } catch (error) {
    next(error);
  }
});

// login (POST)
router.post("/login", validationLogin, async (req, res, next) => {
  try {
    const { email } = req.body;
    const findEmail = await Customer.findOne({ email });

    if (!findEmail)
      return res
        .status(400)
        .render("login", { message: "Invalid Email or password" });

    // logged in
    req.session.isLoggedIn = true;
    req.session.user = findEmail;
    res.status(302).redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
