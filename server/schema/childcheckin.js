const index = require("../index");
const {
  Virtual,
  Text,
  DateTime,
  Integer,
  Select,
} = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Child Timecard");
keystone.createList("ChildTimecard", {
  fields: {
    day1: {
      type: Virtual,
      resolver: (item) => `Monday`,
    },
    time_PunchIn1: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut1: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    clockedIO1: { type: Select, options: "In, Out" },
    day2: {
      type: Virtual,
      resolver: (item) => `Tuesday`,
    },
    time_PunchIn2: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut2: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    clockedIO2: { type: Select, options: "In, Out" },
    day3: {
      type: Virtual,
      resolver: (item) => `Wednesday`,
    },
    time_PunchIn3: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut3: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    clockedIO3: { type: Select, options: "In, Out" },
    day4: {
      type: Virtual,
      resolver: (item) => `Thursday`,
    },
    time_PunchIn4: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut4: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    clockedIO4: { type: Select, options: "In, Out" },
    day5: {
      type: Virtual,
      resolver: (item) => `Friday`,
    },
    time_PunchIn5: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut5: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    clockedIO5: { type: Select, options: "In, Out" },
    day6: {
      type: Virtual,
      resolver: (item) => `Saturday`,
    },
    time_PunchIn6: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut6: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    clockedIO6: { type: Select, options: "In, Out" },
    day7: {
      type: Virtual,
      resolver: (item) => `Sunday`,
    },
    time_PunchIn7: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut7: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    clockedIO7: { type: Select, options: "In, Out" },
  },
  labelResolver: (item) => `TimeCard-C${item.id}`,
});
