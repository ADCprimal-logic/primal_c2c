const index = require("../index");
const { Text, Select, Relationship } = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating Medical Record");
keystone.createList("MedicalRecord", {
  fields: {
    allergies: { type: Text },
    medications: { type: Text },
    doctor_first_name: { type: Text },
    doctor_last_name: { type: Text },
    doctor_phone: { type: Text },
    doctor_email: { type: Text },
  },
});
