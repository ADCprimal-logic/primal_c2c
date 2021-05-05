const index = require("../index");
const {
  Text,
  Select,
  Relationship,
  CalanderDay,
} = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Child");
keystone.createList("Child", {
  fields: {
    first_name: { type: Text },
    last_name: { type: Text },
    gender: { type: Select, options: "Male, Female" },
    school_attended: { type: Text },
    school_grade: {
      type: Select,
      options: "Kindergarden, First, Second, Third, Fourth, Fifth",
    },
    birthdate: { type: CalanderDay },
    parent: { type: Relationship, ref: "Parent", many: true },
    location: { type: Relationship, ref: "Location", many: false },
    schedule: { type: Relationship, ref: "Schedule", many: false },
    medical_record: { type: Relationship, ref: "MedicalRecord", many: false },
  },
});
