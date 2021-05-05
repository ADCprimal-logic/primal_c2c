const index = require("../index");
const {
  Text,
  Checkbox,
  Password,
  Relationship,
} = require("@keystonejs/fields");
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
    location: { type: Relationship, ref: "Location", many: false },
    schedule: { type: Relationship, ref: "Schedule", many: false },
  },
  //labelResolver: item => `${item.first_name} ${item.last_name}`,
});
