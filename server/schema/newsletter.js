const index = require("../index");
const { Text, Select } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Newsletter");
keystone.createList("Newsletter", {
  fields: {
    subject: { type: Text },
    content: { type: Text, isMultiline: true },
    date_posted: { type: Text },
    time_posted: { type: Text },
  },
  labelResolver: (item) => `NL - ${item.id}`,
});
