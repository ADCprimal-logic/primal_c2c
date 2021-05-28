const index = require("../index");
const { Text, Select } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Room");
keystone.createList("Room", {
  fields: {
    type: { type: Select, options: "Homeroom, Classroom" },
    name: { type: Text },
  },
  labelResolver: (item) => `${item.type} - ${item.name}`,
});
