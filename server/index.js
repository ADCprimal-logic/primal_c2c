const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NuxtApp } = require("@keystonejs/app-nuxt");
// Admin UI Auth
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
// Nuxt Plugins
var VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
// .ENV Configuration (ANY process.env.VARIABLE MUST be declared AFTER dotev.config();)
const dotenv = require("dotenv");
dotenv.config();
const PROJECT_NAME = process.env.PROJECT_NAME;
// Database Configuration
const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
const DATABASE_URL = process.env.DATABASE_URL;
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
const fileAdapter = new S3Adapter({
  bucket: S3_BUCKET,
  folder: S3_PATH,
  publicUrl: ({ id, filename, _meta }) =>
    `https://${CF_DISTRIBUTION_ID}.cloudfront.net/${S3_PATH}/${filename}`,
  s3Options: {
    // Optional parameters to be supplied directly to AWS.S3 constructor
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
  },
  uploadParams: ({ filename, id, mimetype, encoding }) => ({
    Metadata: {
      keystone_id: `${id}`,
    },
  }),
});

//Utils Initialize
const auth = require("./util/auth");
const initialiseData = require("./util/initial-data");
const contact = require("./util/contact");
const payment = require("./util/payment");
// Express Packages
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

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
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
});

// Index Exports
exports.indexKey = keystone;
exports.s3Adapter = fileAdapter;

// User Schemas
const superAdminSchema = require("./schema/superadmin");
const staffSchema = require("./schema/staff");
const parentSchema = require("./schema/parent");
const approvedContactSchema = require("./schema/approvedcontact");
const childSchema = require("./schema/child");
// Object Schemas
const locationSchema = require("./schema/location");
const roomSchema = require("./schema/room");
const scheduleSchema = require("./schema/schedule");
const healthSchema = require("./schema/health");
const newsletterSchema = require("./schema/newsletter");
const childCheckInSchema = require("./schema/childcheckin");
const staffCheckInSchema = require("./schema/staffcheckin");
// Test Schemas
const tweedleDeeSchema = require("../reference/tweedledee");
const tweedleDumSchema = require("../reference/tweedledum");

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "SuperAdmin",
  config: { protectIdentities: process.env.NODE_ENV === "production" },
});

module.exports = {
  keystone,
  // Express Configuration (Optional)
  configureExpress: (app) => {
    //* START *//
    // Express Middleware
    app.use(cookieParser());
    app.use(bodyParser.json());
    // Express Routes
    app.post("/api/auth/login", auth.login);
    app.post("/api/auth/user", auth.user);
    //* END *//
  },
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
            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
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
        //"@nuxtjs/auth-next",
      ],
      /*
       ** Axios module configuration
       */
      axios: {
        // See https://github.com/nuxt-community/axios-module#options
      },
      // START - This is auth middleware not being used but may need to be removed //
      /*router: {
        middleware: ["auth"],
      },*/
      /*auth: {
        strategies: {
          local: {
            token: {
              property: "token.accessToken",
            },
            endpoints: {
              login: { url: "/api/auth/login", method: "post" },
              user: { url: "/api/auth/user", method: "get" },
            },
          },
        },
        redirect: {
          login: "/",
        },
        localStorage: {
          prefix: "auth.",
        },
      },
      // END - This is auth middleware not being used but may need to be removed //
      /*
       ** Build configuration
       */
      build: {
          transpile: ["vuetify/lib", /@fullcalendar.*/, 'vee-validate', "vee-validate/dist/rules"],
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
