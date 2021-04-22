# Coast 2 Coast Children Connect

To get setup for this project you will need to set up a handful of things.

1. A Supabase.io account. Once set up use the DB url (starts with postgres://) which can be found in the settings
2. Once you have clone the repository, either run npm install or yarn to add all the dependencies
3. Create a .env file and add the db url to a variable
4. You will need to set up a cookie secret as well

To run the Keystone server, run 'npm run dev'. This gives you a http://localhost:3000 url and place to interact with the backend.

Environment Set Up (.env file)

```
CLOUDINARY_CLOUD_NAME= "cloud_name"
CLOUDINARY_KEY= "cloud_key"
CLOUDINARY_SECRET= "abcdwxyz"
COOKIE_SECRET="32 character string"
DATABASE_URL="Supabase.io DB url in supabase settings"
FRONTEND_URL="http://localhost:7777
```

## NOTICE:

> This is using Keystone 5, the most stable release of KeystoneJS. Keystone 6, or Keystone Next, is the next stage for KeystoneJS. Unfortunately there is no telling when the next version will be released and this version becomes deprecated, but this is used for more active development to be released to production.

## KeystoneJS Starter Template

You've created a KeystoneJS project! This project contains a simple list of users and an admin application (`localhost:3000/admin`) with basic authentication.

## Running the Project.

To run this project first run `npm install`. Note: If you generated this project via the Keystone cli step this has been done for you \\o/.

Once running, the Keystone Admin UI is reachable via `localhost:3000/admin`.

## Next steps

This example has no front-end application but you can build your own using the GraphQL API (`http://localhost:3000/admin/graphiql`).
