const index = require("../index");
const {
  Text,
  Checkbox,
  Password,
  Relationship,
  DateTime,
  File,
  Select,
  Virtual,
} = require("@keystonejs/fields");
const keystone = index.indexKey;
const fileAdapter = index.s3Adapter;

const options = [
  { value: 1, label: "General" },
  { value: 2, label: "Front-Desk" },
  { value: 3, label: "Director" },
];

console.log("Creating Staff");
keystone.createList("StaffMember", {
  fields: {
    role: { type: Select, options, dataType: "integer" },
    profile_pic: {
      type: File,
      adapter: fileAdapter,
    },
    first_name: { type: Text },
    last_name: { type: Text },
    full_name: {
      type: Virtual,
      resolver: (item) => `${item.first_name} ${item.last_name}`,
    },
    email: {
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    password: {
      type: Password,
      isRequired: true,
    },
    phone: { type: Text },
    location: { type: Relationship, ref: "Location", many: false },
    room: { type: Relationship, ref: "Room", many: false },
    time_card: { type: Relationship, ref: "StaffTimecard", many: false },
  },
  labelResolver: (item) => `${item.first_name} ${item.last_name}`,
});
