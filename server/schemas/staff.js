const index = require("../index");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const keystone = index.indexKey;

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
  },
  //labelResolver: item => `${item.first_name} ${item.last_name}`,
});
