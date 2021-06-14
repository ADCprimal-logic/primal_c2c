const index = require("../index");
const { Text, Select, Relationship } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Newsletter");
keystone.createList("Newsletter", {
  fields: {
    basedFrom: { type: Relationship, ref: "Location", many: false },
    subject: { type: Text },
    content: { type: Text, isMultiline: true },
    date_posted: { type: Text },
    time_posted: { type: Text },
  },
  labelResolver: (item) => `NL - ${item.id}`,
});
