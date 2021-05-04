const index = require("../index");
const { Text, Select, Relationship } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Schedule");
keystone.createList("Schedule", {
  fields: {
    type: { type: Select, options: "Staff, Child" },
    createdFor: { type: Relationship, ref: "Location", many: false },
    contentId: { type: Text, isUnique: true },
  },
});
