const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
  // Count existing users
  const {
    data: {
      _allSuperAdminsMeta: { count = 0 },
    },
  } = await keystone.executeGraphQL({
    context: keystone.createContext().sudo(),
    query: `query {
      _allSuperAdminsMeta {
        count
      }
    }`,
  });

  if (count === 0) {
    const password = randomString();
    const email = "c2cSuper@admin.net";

    const { errors } = await keystone.executeGraphQL({
      context: keystone.createContext().sudo(),
      query: `mutation initialSuperAdmin($password: String, $email: String) {
            createSuperAdmin(data: {first_name: "Admin", email: $email, isAdmin: true, phone: "", password: $password}) {
              id
            }
          }`,
      variables: { password, email },
    });

    if (errors) {
      console.log("failed to create initial user:");
      console.log(errors);
    } else {
      console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
    }
  }
};
