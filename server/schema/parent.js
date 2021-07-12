const index = require("../index");
const {
  Text,
  Relationship,
  Password,
  Select,
  Virtual,
} = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Parent");
keystone.createList("Parent", {
  fields: {
    suffix: { type: Select, options: "Mr, Mrs, Ms" },
    first_name: { type: Text },
    last_name: { type: Text },
    full_name: {
      type: Virtual,
      resolver: (item) => `${item.first_name} ${item.last_name}`,
    },
    email: {
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    password: {
      type: Password,
      isRequired: true,
    },
    mobile_phone: { type: Text, isRequired: true },
    home_phone: { type: Text },
    work_phone: { type: Text },
    stripe_id: { type: Text },
    child: { type: Relationship, ref: "Child", many: true },
    approved_contact: {
      type: Relationship,
      ref: "ApprovedContact",
      many: true,
    },
  },
  labelResolver: (item) => `${item.suffix}. ${item.last_name}`,
});
