const index = require("../index");
const {
  Text,
  Select,
  Relationship,
  DateTime,
  Integer,
} = require("@keystonejs/fields");
const keystone = index.indexKey;
const fileAdapter = index.s3Adapter;

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
    parent: { type: Relationship, ref: "Parent", many: true },
    approved_contact: {
      type: Relationship,
      ref: "ApprovedContact",
      many: true,
    },
    location: { type: Relationship, ref: "Location", many: false },
    schedule: { type: Relationship, ref: "Schedule", many: false },
    medical_record: { type: Relationship, ref: "MedicalRecord", many: false },
    pin_number: { type: Integer },
    check_in: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    check_out: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
  },
  labelResolver: (item) => `${item.first_name} ${item.last_name}`,
});
