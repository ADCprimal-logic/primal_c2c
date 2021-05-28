const index = require("../index");
const { Text, Relationship } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Location");
keystone.createList("Location", {
  fields: {
    name: { type: Text },
    program: { type: Text },
    street_Address: { type: Text },
    city: { type: Text },
    state: { type: Text },
    zip: { type: Text },
    country: { type: Text },
    room: { type: Relationship, ref: "Room", many: true },
  },
  labelResolver: (item) => `${item.name}`,
});
