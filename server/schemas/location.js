const index = require("../index");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Location");
keystone.createList("Location", {
  fields: {
    name: { type: Text },
    program: { type: Text },
    street: { type: Text },
    city: { type: Text },
    state: { type: Text },
    zip: { type: Text },
    country: { type: Text },
  },
});
