const index = require("../index");
// DB Package Connection
const postgres = require("postgres");
// Payment Platform
const stripe = require("stripe");
// Initialize .ENV
const dotenv = require("dotenv");
dotenv.config();

exports.getCustomer = async (req, res) => {};
exports.updateCustomer = async (req, res) => {};
exports.removeCustomer = async (req, res) => {};
