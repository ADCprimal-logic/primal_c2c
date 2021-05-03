# Coast 2 Coast Backend

To get setup for this project you will need to set up a handful of things.

1. A Supabase.io account. Once set up use the DB url (starts with postgres://) which can be found in the settings
2. Once you have clone the repository, either run npm install or yarn to add all the dependencies
3. Create a .env file and add the db url to a variable
4. You will need to set up a cookie secret as well

To run the Keystone server, run 'npm run dev'. This gives you a http://localhost:3000 url and place to interact with the backend.

## NOTICE:

> This is using Keystone 6 or Keystone-Next, the next stage for KeystoneJS. In order to future proof the product we are developing schemas and frameworks on this branch so functionality is one for one without sacrificing time to learn new syntax once a new version is released.

Environment Set Up (.env file)

```
#Back-End Environment
PROJECT_NAME="C2C Children Connect"
VERSION_NUMBER="0.0.1"
COOKIE_SECRET="bNLVPe1NIFSCeNRHEQ7CUyjcnVzko6MI"
# Cloudinary Creds
CLOUDINARY_CLOUD_NAME= "cloud_name"
CLOUDINARY_KEY= "cloud_key"
CLOUDINARY_SECRET= "abcdwxyz"
# Endpoint URLS
DATABASE_URL="postgres://primal_postgres:primal-squad@c2cdatabase.cqs5a6cxnjkx.us-east-1.rds.amazonaws.com:5432/development_beta"
FRONTEND_URL="http://localhost:7777"
NUXT_TELEMETRY_DISABLED=1
```
