const index = require("../index");
const { Text, Relationship, CalendarDay } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Medical Record");
keystone.createList("MedicalRecord", {
  fields: {
    allergies: { type: Text, isMultiline: true },
    medications: { type: Text, isMultiline: true },
    doctor_first_name: { type: Text },
    doctor_last_name: { type: Text },
    doctor_phone: { type: Text },
    doctor_email: { type: Text },
    birthdate: { type: CalendarDay, isRequired: true },
    child: { type: Relationship, ref: "Child", many: false, isRequired: true },
  },
  labelResolver: (item) => `MR-${item.id}`,
});
