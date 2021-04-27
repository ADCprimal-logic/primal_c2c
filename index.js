const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NuxtApp } = require("@keystonejs/app-nuxt");
const initialiseData = require("./initial-data");
const userSchemas = require("./schemas/superadmin");
// .ENV Configuration
const dotenv = require("dotenv");
dotenv.config();

const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
const PROJECT_NAME = process.env.PROJECT_NAME;
const DATABASE_URL = process.env.DATABASE_URL;
const adapterConfig = {
  knexOptions: {
    connection: DATABASE_URL,
  },
};

const keystone = new Keystone({
  appVersion: {
    version: process.env.VERSION_NUMBER,
    addVersionToHttpHeaders: true,
    access: true,
  },
  cookie: {
    cookieSecret: process.env.COOKIE_SECRET,
    secure: process.env.NODE_ENV === "production", // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
});

exports.keystone = keystone;

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
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
      srcDir: "src",
      buildDir: "dist",
    }),
  ],
};
