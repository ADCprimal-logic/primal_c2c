const index = require("../index");
const {
  Text,
  Checkbox,
  Password,
  Relationship,
  DateTime,
  CheckBox,
} = require("@keystonejs/fields");
const keystone = index.indexKey;
const fileAdapter = index.s3Adapter;

console.log("Creating Staff");
keystone.createList("StaffMember", {
  fields: {
    first_name: { type: Text },
    last_name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    password: {
      type: Password,
      isRequired: true,
    },
    phone: { type: Text },
    location: { type: Relationship, ref: "Location", many: false },
    schedule: { type: Relationship, ref: "Schedule", many: false },
    check_in: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    check_out: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
  },
  labelResolver: (item) => `${item.first_name} ${item.last_name}`,
});
