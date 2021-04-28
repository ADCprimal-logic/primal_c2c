const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
  const password = "#Test12345";
  const email = "anthony@primal-logic.io";

  const { errors } = await keystone.executeGraphQL({
    context: keystone.createContext().sudo(),
    query: `mutation initialUser($password: String, $email: String) {
			createSuperAdmin(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
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
};
