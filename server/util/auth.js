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
const jwt = require("express-jwt");
const jsonwebtoken = require("jsonwebtoken");
// Express Middleware
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

exports.login = async (req, res) => {
  //console.log(req.body);
  // Delcare Variables
  const email = "first@parent.net";
  const password = "#primalPass";
  const role = "Parent";
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
    user = await sql`SELECT email, password FROM public."StaffMember"
    WHERE email =  ${email}`;
  }
  // Password Check
  /*try {
    isValidPassword = await bcrypt.compare(password, user[0].password);
    console.log(isValidPassword);
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
  
  
  /*const accessToken = jsonwebtoken.sign(
    {
      email,
      scope: ["user", role],
    },
    process.env.JWT_TOKEN,
    {
      expiresIn,
    }
  );
  res.json({
    token: {
      accessToken,
    },
  });*/
};

exports.logout = async (req, res) => {};

exports.forgotPassword = async (req, res) => {
  const { password } = req.body;
};

exports.user = async (req, res) => {};
