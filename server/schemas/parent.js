const index = require("../index");
const { Text, Relationship } = require("@keystonejs/fields");
const Stripe = require("stripe");
const keystone = index.indexKey;

console.log("Creating Parent");
keystone.createList("Parent", {
  fields: {
    first_name: { type: Text },
    last_name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    phone: { type: Text },
    child: { type: Relationship, ref: "Child", many: true },
    stripeId: { type: Text },
  },
});
