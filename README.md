# Coast 2 Coast Children Connect

To get setup for this project you will need to set up a handful of things.

1. Set up the .env as shown in the example below and put it in the server folder.
2. Run `yarn setup-project` to install all the dependancies from package.json on both the front-end & back-end
   - If running with a new database url, run `yarn create-tables` to initialize all the tables in your project found in the schema folder under server.
3. Run `yarn dev` to initialize the project so it can be built and ran locally.

Once run you will have a http://localhost:3000 url which would prompt your NuxtJS Front-End with http://localhost:3000/admin acting as your Administrative KeystoneJS Backend

## NOTICE:

> This is using Keystone 5, the most stable release of KeystoneJS. Keystone 6, or Keystone Next, is the next stage for KeystoneJS. Unfortunately there is no telling when the next version will be released and this version becomes deprecated, but this is used for more active development to be released to production.

## Environment Set (.env)

```
PROJECT_NAME="C2C Children Connect"
VERSION_NUMBER="0.0.1"
COOKIE_SECRET="bNLVPe1NIFSCeNRHEQ7CUyjcnVzko6MI"
# Cloudinary Creds
CLOUDINARY_CLOUD_NAME= "cloud_name"
CLOUDINARY_KEY= "cloud_key"
CLOUDINARY_SECRET= "abcdwxyz"
# Endpoint URLS
DATABASE_URL="postgres://primal_postgres:primal-squad@c2cdatabase.cqs5a6cxnjkx.us-east-1.rds.amazonaws.com:5432/development"
FRONTEND_URL="http://localhost:7777"
NUXT_TELEMETRY_DISABLED=1
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
This dashboard is the official Vuetify version of the Original [Material Dashboard](https://www.creative-tim.com/product/material-dashbo