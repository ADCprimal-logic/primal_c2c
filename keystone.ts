import { config } from "@keystone-next/keystone/schema";
import {
  statelessSessions,
  withItemData,
} from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import "dotenv/config";
import { lists } from "./schema";
import { permissionsList } from "./schemas/fields";

const databaseURL = `${process.env.DATABASE_URL}`;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long should they stayed signed in
  secret: `${process.env.COOKIE_SECRET}`,
};

const auth = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default auth.withAuth(
  config({
    server: {
      cors: {
        origin: [`${process.env.FRONTEND_URL}`],
        credentials: true,
      },
    },
    db: {
      adapter: "prisma_postgresql",
      url: databaseURL,
    },
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    lists,
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email role { ${permissionsList.join(" ")} }`,
    }),
  })
);
