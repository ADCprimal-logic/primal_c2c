const index = require("../index");
// DB Package Connection
const postgres = require("postgres");
// SMS Integration
const twilio = require("twilio");
// Random String Generator
const crypto = require("crypto");
// Password Hashing
const bcrypt = require("bcrypt");
// Initialize .ENV
const dotenv = require("dotenv");
dotenv.config();
// JsonWebToken Config
const jsonwebtoken = require("jsonwebtoken");

exports.login = async (req, res) => {
  //console.log(req.body);
  // Declare Variables
  const { email, password, role } = req.body;
  const expiresIn = 15;
  var user = null;
  let isValidPassword;
  const sql = postgres(process.env.DATABASE_URL);
  // SQL Query Switch
  if (role === "Parent") {
    user = await sql`SELECT email, password FROM public."Parent"
    WHERE email =  ${email}`;
  } else if (role === "Staff") {
    user = await sql`SELECT email, password FROM public."StaffMember"
    WHERE email =  ${email}`;
  } else if (role === "SuperAdmin") {
    user = await sql`SELECT email, password FROM public."SuperAdmin"
    WHERE email =  ${email}`;
  }
  //console.log(user);
  // User Logic Check
  if (user.count === 0) {
    //console.log("No User Exists");
    res.status(500);
    res.json({
      status: 500,
      message: "No User Exists",
    });
  } else {
    //console.log("User Exists");
    // Password Check
    try {
      isValidPassword = await bcrypt.compare(password, user[0].password);
    } catch (err) {
      console.log(err);
    }
    if (isValidPassword === true) {
      // Sign and Send Token
      const accessToken = jsonwebtoken.sign(
        {
          email,
          scope: ["user", role],
        },
        process.env.JWT_TOKEN,
        {
          expiresIn,
        }
      );
      res.status(200);
      res.json({
        status: 200,
        message: "Access Granted!",
        token: {
          accessToken,
        },
        user: {
          email,
        },
      });
    } else {
      console.log("Invalid Password");
      res.status(401);
      res.json({
        status: 401,
        message: "Invalid Password",
      });
    }
  }
};

exports.user = async (req, res) => {
  console.log("USER BODY ENDPOINT");
  console.log(req.body);
  console.log("USER OBJ ENDPOINT");
  console.log(req.user);
  res.json({
    user: {},
  });
};

exports.forgotPassword = async (req, res) => {
  const { password } = req.body;
};
