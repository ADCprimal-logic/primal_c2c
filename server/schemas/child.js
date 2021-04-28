const index = require("../index");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Child");
keystone.createList("Child", {
  fields: {
    first_name: { type: Text },
    last_name: { type: Text },
  },
});
