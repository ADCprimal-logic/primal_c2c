const index = require("../index");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const keystone = index.indexKey;

keystone.createList("Schedule", {
  fields: {
    type: { type: Text },
  },
});
