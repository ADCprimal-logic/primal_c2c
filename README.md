<div align="center">
<img src="https://primal-c2c-images.s3.amazonaws.com/static/C2Clogowhite.png"  height="200" width="200">
</div>
<br>

# Coast 2 Coast Children Connect

To get setup for this project you will need to set up a handful of things.

1. Set up the .env as shown in the example below and put it in the server folder.
2. Run `yarn install` to install all the dependancies from package.json on both the front-end & back-end
   - If running with a new database url, run `yarn create-tables` to initialize all the tables in your project found in the schema folder under server.
   - IMPORTANT: Comment out lines 16 and 58 of index.js under server BEFORE you create tables, so that on `yarn dev` your Super Admin Object will be initialized
3. Run `yarn dev` to initialize the project so it can be built and ran locally.

> To connect to [demo database](postgres://primal_postgres:primal-squad@c2cdatabase.cqs5a6cxnjkx.us-east-1.rds.amazonaws.com:5432/dev1) that includes ALL project schema use this username and password:

```
email: c2cSuper@admin.net
password: #primalPass
```

Once run you will have a http://localhost:3000 url which would prompt your NuxtJS Front-End with http://localhost:3000/admin acting as your Administrative KeystoneJS Backend

## NOTICE:

> This is using Keystone 5, the most stable release of KeystoneJS. Keystone 6, or Keystone Next, is the next stage for KeystoneJS. Unfortunately there is no telling when the next version will be released and this version becomes deprecated, but this is used for more active development to be released to production.

## EnvStatusment Set (.env)

```
# Keystone Config
PROJECT_NAME="C2C Children Connect"
VERSION_NUMBER="0.2.0"
COOKIE_SECRET="bNLVPe1NIFSCeNRHEQ7CUyjcnVzko6MI"
SITE_NAME=""
# AWS S3 Creds
S3_PATH = 'primal-c2c-images.s3.amazonaws.com'
S3_BUCKET ='primal-c2c-images'
CF_DISTRIBUTION_ID = "E3ITN9Q4LXOLYC"
ACCESS_KEY_ID = 'AKIAYEDJQHVO4YE5KGFE'
SECRET_KEY_ID = 'SzaE2ZGAMhVFCaSE5s54EPdBgyyNz+abstpzPb52'
REGION = 'us-west-1'
# Twilio Creds
TWILIO_ACCOUNT_SID = ""
TWILIO_AUTH_TOKEN = ""
TWILIO_NUMBER = ""
# Stripe Creds
SECRET_KEY = ""
PUBLISH_KEY = ""
TEST_SECRET_KEY = ""
TEST_PUBLISH_KEY = ""
# Database Config
DATABASE_URL="postgres://primal_postgres:primal-squad@c2cdatabase.cqs5a6cxnjkx.us-east-1.rds.amazonaws.com:5432/dev1"
# Build Config
NUXT_TELEMETRY_DISABLED=1
CREATE_TABLES=""
```

## Documentation for further development:

- KeystoneJS (Back-End): https://www.keystonejs.com/documentation/
  - KnexJS (Database Middleware): https://knexjs.org
  - Apollo (GraphQL Playground): https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/
- NuxtJS (Front-End): https://nuxtjs.org/docs/2.x/get-started/installation
  - Vue (Javascript Framework): https://vuejs.org

## Contributing Repo

> NuxtJs Dashboard is based on Vuetify Material Theme purposed by Creative Tim

NuxtJs Dashboard Vuetify Material is a beautiful resource built over [NuxtJs](https://nuxtjs.org/) coupled with [Vuetify](https://vuetifyjs.com/en/). It will help you get started developing dashboards in no time.
This dashboard is the official Vuetify version of the Original [Material Dashboard](https://www.creative-tim.com/product/material-dashboard). Using the Dashboard is pretty simple but requires basic knowledge of [NuxtJs](https://nuxtjs.org/) and [Vuetify](https://vuetifyjs.com/en/).
