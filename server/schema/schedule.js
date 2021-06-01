const index = require("../index");
const { Text, Select, Relationship } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Schedule");
keystone.createList("Schedule", {
  fields: {
    type: { type: Select, options: "Staff, Child" },
    basedIn: {
      type: Relationship,
      ref: "Location.name",
      many: false,
      isRequired: true,
    },
    contentId: { type: Text, isUnique: true },
  },
  labelResolver: (item) => `SCH-${item.id}`,
});
