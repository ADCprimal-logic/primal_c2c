const index = require("../index");
const { Text, DateTime, Integer, Select } = require("@keystonejs/fields");
const keystone = index.indexKey;

const options = [
  { value: 1, label: "Yes" },
  { value: 0, label: "No" },
];

console.log("Creating Child Timecard");
keystone.createList("ChildTimecard", {
  fields: {
    check_in: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    check_out: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    isPresent: { type: Select, options, dataType: "integer" },
    isLate: { type: Select, options, dataType: "integer" },
    isAbsent: { type: Select, options, dataType: "integer" },
    clockedIO: {type: Text}
  },
  labelResolver: (item) => `TimeCard-C${item.id}`,
});
