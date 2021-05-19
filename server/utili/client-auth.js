const index = require("../index");
// DB Package Connection
const postgres = require("postgres");
// SMS Integration
const twilio = require("twilio");
// Password Hashing
const bcrypt = require("bcrypt");
// Initialize .ENV
const configEnv = index.indexEnv;
configEnv;
