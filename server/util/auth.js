const index = require("../index");
// DB Package Connection
const postgres = require("postgres");
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
  // Set Variables
  const email = "first@parent.net";
  const role = "Parent";
  const expiresIn = 15;
  const user = null;
  // SQL Query Switch
  const sql = postgres(process.env.DATABASE_URL);
  switch (role) {
    case "Parent":
      console.log(role);
      user = await sql`SELECT email, password FROM public."Parent"
			WHERE email =  '${email}'`;
      break;
    case "Staff":
      user = await sql`SELECT email, password FROM public."StaffMember"
			WHERE email =  '${email}'`;
      break;
  }
  // User Validation
  console.log(user[0].email);
  console.log(user[0].password);
  /*let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare("#primalPass", user[0].password);
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }*/

  // Set Access Token
  /*const accessToken = jsonwebtoken.sign(
    {
      user[0].email,
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
