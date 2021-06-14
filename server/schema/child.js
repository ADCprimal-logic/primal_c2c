const index = require("../index");
const {
  Text,
  Select,
  Relationship,
  DateTime,
  Integer,
  CheckBox,
  Virtual,
} = require("@keystonejs/fields");
const keystone = index.indexKey;
const fileAdapter = index.s3Adapter;

console.log("Creating Child");
keystone.createList("Child", {
  fields: {
    first_name: { type: Text },
    last_name: { type: Text },
    full_name: {
      type: Virtual,
      resolver: (item) => `${item.first_name} ${item.last_name}`,
    },
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
    room: { type: Relationship, ref: "Room", many: false },
    medical_record: { type: Relationship, ref: "MedicalRecord", many: false },
    time_card: { type: Relationship, ref: "ChildTimecard", many: false },
    pin_number: { type: Integer },
    enrollment_status: { type: Select, options: "Active, Inactive" },
  },
  labelResolver: (item) => `${item.first_name} ${item.last_name}`,
});
