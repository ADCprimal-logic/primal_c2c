const index = require("../index");
// DB Package Connection
const postgres = require("postgres");
// Email Integration
const nodemailer = require("nodemailer");
// Initialize .ENV
const dotenv = require("dotenv");
dotenv.config();