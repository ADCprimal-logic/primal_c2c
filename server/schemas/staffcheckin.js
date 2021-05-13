const index = require("../index");
const { DateTime, Integer, Select } = require("@keystonejs/fields");
const keystone = index.indexKey;

const options = [
  { value: 1, label: "Yes" },
  { value: 0, label: "No" },
];

console.log("Creating Staff Timecard");
keystone.createList("StaffTimecard", {
  fields: {
    check_in: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    check_out: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    days_worked: { type: Integer },
    isLate: { type: Select, options, dataType: "integer" },
    isAbsent: { type: Select, options, dataType: "integer" },
  },
  labelResolver: (item) => `TimeCard-S${item.id}`,
});
