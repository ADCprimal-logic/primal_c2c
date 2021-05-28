const index = require("../server/index");
const { AutoIncrement } = require("@keystonejs/fields-auto-increment");
const { Content } = require("@keystonejs/fields-content");
const {
  Text,
  Password,
  CalendarDay,
  Checkbox,
  DateTime,
  Decimal,
  Float,
  Integer,
  Relationship,
  Select,
  Slug,
  Uuid,
} = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating TweedleDum");
keystone.createList("TweedledumItem", {
  fields: {
    firstName: { type: Text },
    lastName: { type: Text },
    increment: { type: AutoIncrement, gqlType: "Int" },
    password: { type: Password },
    calandarDay: {
      type: CalendarDay,
      dateFrom: "2001-01-16",
    },
    isEnabled: { type: Checkbox, isRequired: true },
    content: {
      type: Content,
      blocks: [
        Content.blocks.blockquote,
        Content.blocks.image,
        Content.blocks.link,
        Content.blocks.orderedList,
        Content.blocks.unorderedList,
        Content.blocks.heading,
      ],
    },
    dateTime: {
      type: DateTime,
      format: "dd/MM/yyyy HH:mm O",
      yearRangeFrom: 2000,
    },
    decimal: { type: Decimal },
    float: { type: Float },
    integer: { type: Integer },
    select: { type: Select, options: "pending, processed" },
    slug: { type: Slug },
    uuid: { type: Uuid, caseTo: "upper" },
    relationship: { type: Relationship, ref: "TweedledeeItem", many: true },
  },
  //labelResolver: (item) => `${item.name}`,
});
