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
  console.log(req.body.data);
  // Declare Variables
  const { email, password, role } = req.body.data;
  const expiresIn = "1h";
  var user = null;
  let isValidPassword;
  const sql = postgres(process.env.DATABASE_URL);
  // SQL Query Switch
  if (role === "Parent") {
    user = await sql`SELECT email, password, id, first_name FROM public."Parent"
    WHERE email =  ${email}`;
  } else if (role === "Staff") {
    user =
      await sql`SELECT email, password, id, first_name FROM public."StaffMember"
    WHERE email =  ${email}`;
  } else if (role === "SuperAdmin") {
    user =
      await sql`SELECT email, password, id, first_name FROM public."SuperAdmin"
    WHERE email =  ${email}`;
  }
  //console.log(user);
  // User Logic Check
  if (user.count === 0 || user === null) {
    //console.log("No User Exists");
    res.status(500);
  } else {
    //console.log("User Exists");
    var id = user[0].id;
    var name = user[0].first_name;
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
          id,
          email,
          name,
          role,
        },
        process.env.JWT_TOKEN,
        {
          expiresIn,
        }
      );
      res.status(200);
      res.send({
        status: 200,
        message: "Access Granted!",
        accessToken,
      });
    } else {
      console.log("Invalid Password");
      res.status(401);
    }
  }
};

exports.user = async (req, res) => {
  //console.log(req.body);
  //console.log("Getting User");
  var accessToken = req.body.data;
  var decoded = jsonwebtoken.verify(accessToken, process.env.JWT_TOKEN);
  //console.log(decoded);
  res.send({
    status: 200,
    message: "Verified User",
    decoded,
  });
};

exports.forgotPassword = async (req, res) => {
  const { password } = req.body;
};
