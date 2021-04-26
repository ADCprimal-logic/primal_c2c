# Coast 2 Coast Children Connect

To get setup for this project you will need to set up a handful of things.

1. Set up the .env as shown in the example below.
2. Run `yarn install` to install all the dependancies from package.json
3. Run `yarn dev` to initialize the project so it can be built and ran locally. If asked, "Are you interested in participating?", type N.

Once run you will have a http://localhost:3000 url which would prompt our NuxtJS Front-End with http://localhost:3000/admin acting as our Administrative KeystoneJS Backend

## NOTICE:

> This is using Keystone 5, the most stable release of KeystoneJS. Keystone 6, or Keystone Next, is the next stage for KeystoneJS. Unfortunately there is no telling when the next version will be released and this version becomes deprecated, but this is used for more active development to be released to production.

## Environment Set (.env)

```
PROJECT_NAME="C2C Children Connect"
COOKIE_SECRET="bNLVPe1NIFSCeNRHEQ7CUyjcnVzko6MI"
# Cloudinary Creds
CLOUDINARY_CLOUD_NAME= "cloud_name"
CLOUDINARY_KEY= "cloud_key"
CLOUDINARY_SECRET= "abcdwxyz"
# Endpoint URLS
DATABASE_URL="postgres://primal_postgres:primal-squad@c2cdatabase.cqs5a6cxnjkx.us-east-1.rds.amazonaws.com:5432/development"
FRONTEND_URL="http://localhost:7777
```

## Scripts to Run with Yarn

```
"dev": "cross-env NODE_ENV=development DISABLE_LOGGING=true keystone dev"
"build": "cross-env NODE_ENV=production keystone build"
"start": "cross-env NODE_ENV=production keystone start"
```

## Documentation for further development:

- KeystoneJS (Back-End): https://www.keystonejs.com/documentation/
- NuxtJS (Front-End): https://nuxtjs.org/docs/2.x/get-started/installation
