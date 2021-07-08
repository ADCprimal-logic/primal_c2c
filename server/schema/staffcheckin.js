const index = require("../index");
const { Virtual, DateTime, Float, Select } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Staff Timecard");
keystone.createList("StaffTimecard", {
  fields: {
    day1: {
      type: Virtual,
      resolver: (item) => `1st Monday`,
    },
    time_PunchIn1: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut1: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked1: { type: Float },
    clockedIO1: { type: Select, options: "In, Out" },
    day1_notes: { type: Text },
    day2: {
      type: Virtual,
      resolver: (item) => `1st Tuesday`,
    },
    time_PunchIn2: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut2: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked2: { type: Float },
    clockedIO2: { type: Select, options: "In, Out" },
    day2_notes: { type: Text },
    day3: {
      type: Virtual,
      resolver: (item) => `1st Wednesday`,
    },
    time_PunchIn3: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut3: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked3: { type: Float },
    clockedIO3: { type: Select, options: "In, Out" },
    day3_notes: { type: Text },
    day4: {
      type: Virtual,
      resolver: (item) => `1st Thursday`,
    },
    time_PunchIn4: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut4: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked4: { type: Float },
    clockedIO4: { type: Select, options: "In, Out" },
    day4_notes: { type: Text },
    day5: {
      type: Virtual,
      resolver: (item) => `1st Friday`,
    },
    time_PunchIn5: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut5: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked5: { type: Float },
    clockedIO5: { type: Select, options: "In, Out" },
    day5_notes: { type: Text },
    day6: {
      type: Virtual,
      resolver: (item) => `1st Saturday`,
    },
    time_PunchIn6: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut6: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked6: { type: Float },
    clockedIO6: { type: Select, options: "In, Out" },
    day6_notes: { type: Text },
    day7: {
      type: Virtual,
      resolver: (item) => `1st Sunday`,
    },
    time_PunchIn7: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut7: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked7: { type: Float },
    clockedIO7: { type: Select, options: "In, Out" },
    day7_notes: { type: Text },
    day8: {
      type: Virtual,
      resolver: (item) => `2nd Monday`,
    },
    time_PunchIn8: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut8: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked8: { type: Float },
    clockedIO8: { type: Select, options: "In, Out" },
    day8_notes: { type: Text },
    day9: {
      type: Virtual,
      resolver: (item) => `2nd Tuesday`,
    },
    time_PunchIn9: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut9: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked9: { type: Float },
    clockedIO9: { type: Select, options: "In, Out" },
    day9_notes: { type: Text },
    day10: {
      type: Virtual,
      resolver: (item) => `2nd Wednesday`,
    },
    time_PunchIn10: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut10: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked10: { type: Float },
    clockedIO10: { type: Select, options: "In, Out" },
    day10_notes: { type: Text },
    day11: {
      type: Virtual,
      resolver: (item) => `2nd Thursday`,
    },
    time_PunchIn11: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut11: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked11: { type: Float },
    clockedIO11: { type: Select, options: "In, Out" },
    day11_notes: { type: Text },
    day12: {
      type: Virtual,
      resolver: (item) => `2nd Friday`,
    },
    time_PunchIn12: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut12: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked12: { type: Float },
    clockedIO12: { type: Select, options: "In, Out" },
    day12_notes: { type: Text },
    day13: {
      type: Virtual,
      resolver: (item) => `2nd Saturday`,
    },
    time_PunchIn13: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut13: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked13: { type: Float },
    clockedIO13: { type: Select, options: "In, Out" },
    day13_notes: { type: Text },
    day14: {
      type: Virtual,
      resolver: (item) => `2nd Sunday`,
    },
    time_PunchIn14: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    time_PunchOut14: { type: DateTime, format: "dd/MM/yyyy HH:mm O" },
    hours_worked14: { type: Float },
    clockedIO14: { type: Select, options: "In, Out" },
    day14_notes: { type: Text },
  },
  labelResolver: (item) => `TimeCard-S${item.id}`,
});
