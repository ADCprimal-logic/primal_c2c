const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NuxtApp } = require("@keystonejs/app-nuxt");
// .ENV Configuration
const dotenv = require("dotenv");
dotenv.config();

const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
const initialiseData = require("./initial-data");
const PROJECT_NAME = process.env.PROJECT_NAME;
const DATABASE_URL = process.env.DATABASE_URL;
console.log("Database: " + DATABASE_URL);
const adapterConfig = {
  knexOptions: {
    connection: DATABASE_URL,
  },
};

const keystone = new Keystone({
  cookieSecret: process.env.COOKIE_SECRET,
  cookie: {
    secure: process.env.NODE_ENV === "production", // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
});

//console.log(keystone);

exports.indexKey = keystone;

// User Schemas
const superAdminSchema = require("./schemas/superadmin");
const staffSchema = require("./schemas/staff");
const parentSchema = require("./schemas/parent");
const childSchema = require("./schemas/child");
// Object Schemas
const locationSchema = require("./schemas/location");
const scheduleSchema = require("./schemas/schedule");

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "SuperAdmin",
  config: { protectIdentities: process.env.NODE_ENV === "production" },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      authStrategy,
    }),
    new NuxtApp({
      srcDir: "../client/src",
      buildDir: "../client/dist",
    }),
  ],
};