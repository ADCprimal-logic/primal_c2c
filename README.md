# Coast 2 Coast Children Connect

To get setup for this project you will need to set up a handful of things.

1. A Supabase.io account. Once set up use the DB url (starts with postgres://) which can be found in the settings
2. Once you have clone the repository, either run npm install or yarn to add all the dependencies
3. You will need to set up a cookie secret as well

To run the project run 'yarn dev'. This gives you a http://localhost:3000 url which would prompt our NuxtJS Front-End with http://localhost:3000/admin acting as our Administrative Backend

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
