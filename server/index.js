const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NuxtApp } = require("@keystonejs/app-nuxt");
// Nuxt Plugins
var VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
// .ENV Configuration
const dotenv = require("dotenv");
dotenv.config();
const PROJECT_NAME = process.env.PROJECT_NAME;
//console.log(PROJECT_NAME);
// Database Configuration
const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
//const initialiseData = require("./initial-data");
const DATABASE_URL = process.env.DATABASE_URL;
//console.log("Database: " + DATABASE_URL);
const adapterConfig = {
  knexOptions: {
    connection: DATABASE_URL,
  },
};
// S3 Configuration
const { S3Adapter } = require("@keystonejs/file-adapters");
const CF_DISTRIBUTION_ID = process.env.CF_DISTRIBUTION_ID;
const S3_PATH = process.env.S3_PATH;
const S3_BUCKET = process.env.S3_BUCKET;
/*const fileAdapter = new S3Adapter({
  bucket: S3_BUCKET,
  folder: S3_PATH,
  publicUrl: ({ id, filename, _meta }) =>
    `https://${CF_DISTRIBUTION_ID}.cloudfront.net/${S3_PATH}/${filename}`,
  s3Options: {
    // Optional paramaters to be supplied directly to AWS.S3 constructor
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
  },
  uploadParams: ({ filename, id, mimetype, encoding }) => ({
    Metadata: {
      keystone_id: `${id}`,
    },
  }),
});*/

const keystone = new Keystone({
  appVersion: {
    version: process.env.APP_VERSION,
  },
  cookieSecret: process.env.COOKIE_SECRET,
  cookie: {
    secure: process.env.NODE_ENV === "production", // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
  adapter: new Adapter(adapterConfig),
  //onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
});

// See Keystone Object
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
//const healthSchema = require("./schemas/schedule");

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
      hooks: require.resolve("./server-ui"),
      authStrategy,
    }),
    new NuxtApp({
      srcDir: "../client/src",
      buildDir: "../client/dist",
      head: {
        title: PROJECT_NAME,
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { hid: "description", name: "description", content: "desc" },
        ],
        link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          {
            rel: "stylesheet",
            href:
              "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
          },
        ],
      },
      /*
       ** Global CSS
       */
      css: ["~/assets/style/index.scss"],

      /*
       ** Plugins to load before mounting the App
       */
      plugins: [
        "~/plugins/vuetify",
        { src: "~/plugins/chartist", mode: "client" },
      ],

      /*
       ** Nuxt.js modules
       */
      modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "@nuxtjs/auth-next",
      ],
      /*
       ** Axios module configuration
       */
      axios: {
        // See https://github.com/nuxt-community/axios-module#options
      },

      /*
       ** Build configuration
       */
      build: {
        transpile: ["vuetify/lib"],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {},
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
      },
    }),
  ],
};
