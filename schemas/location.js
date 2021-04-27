const index = require("../index");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const keystone = index.indexKey;

keystone.createList("Location", {
  fields: {
    name: { type: Text },
    program: { type: Text },
  },
});
