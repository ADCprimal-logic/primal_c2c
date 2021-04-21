# Customer_Connect_Backend

To get setup for this project how I was building it you will need to set up a handful of things.

1. A Supabase.io account. Once set up use the DB url (starts with postgres://) which can be found in the settings
2. Once you have clone the repository, either run npm install or yarn to add all the dependencies
3. Create a .env file and add the db url to a variable
4. You will need to set up a cookie secret as well

I will add a .env.sample for you to replace credentials.

As of now there is no frontend. You will need to create a frontend.

- The frontend will need to use React/Nextjs and Apollo/GraphQL to query the backend.
- You will need to add a FRONTEND_URL environment variable to your backend .env file.

To run the Keystone server, run 'npm run dev'. This gives you a http://localhost:3000 url and place to interact with the backend.

_If you want to change things here are some options_

1. You don't have to use supabase with the Keystone backend. Keystone uses Prisma, which is an ORM, as an adapter. All this means is that as long as you provide a postgres url (postgres://) then you will be able to use keystone.
2. Keystone is written in Typescript, however, as you look through the files things are pretty intuitive from what you are creating. You can do a lot more than is currently in the files and their docs are at keystonejs.com.
3. The version of keystone in this app is newest version.
4. You can get rid of keystone all together and just use Supabase. Once you set up Supabase which comes with the ability to right postgres queries in the app, you are given all the information you will need for the CRUD app. If you decide to go with Supabase by itself, you do not need to use the things I suggested for the frontend.

Hope these things are helpful.

Environment Set Up

```
COOKIE_SECRET="32 character string"
DATABASE_URL="Supabase.io DB url in supabase settings"
FRONTEND_URL="http://localhost:7777
```
