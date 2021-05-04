const index = require("../index");
const { Text, Select, Relationship } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Child");
keystone.createList("Child", {
  fields: {
    first_name: { type: Text },
    last_name: { type: Text },
    gender: { type: Select, options: "Male, Female" },
    school_Attended: { type: Text },
    school_Grade: {
      type: Select,
      options: "Kindergarden, First, Second, Third, Fourth, Fifth",
    },
    parent: { type: Relationship, ref: "Parent", many: true },
    location: { type: Relationship, ref: "Location", many: false },
    schedule: { type: Relationship, ref: "Schedule", many: false },
  },
});
