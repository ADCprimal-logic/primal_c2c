const index = require("../index");
const { Text, Relationship, Select } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Approved Contact");
keystone.createList("ApprovedContact", {
  fields: {
    suffix: { type: Select, options: "Mr, Mrs, Ms" },
    first_name: { type: Text },
    last_name: { type: Text },
    phone: { type: Text, isRequired: true },
    relation: { type: Text, isRequired: true },
    child: { type: Relationship, ref: "Child", many: true },
    parent: { type: Relationship, ref: "Parent", many: true },
  },
  labelResolver: (item) => `${item.suffix}. ${item.last_name}`,
});
