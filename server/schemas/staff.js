const index = require("../index");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const keystone = index.indexKey;

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

console.log("Creating Staff");
keystone.createList("StaffMember", {
  fields: {
    first_name: { type: Text },
    last_name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    phone: { type: Text },
    status: { type: Text },
    password: {
      type: Password,
    },
  },
});
