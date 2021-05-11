const index = require("../server/index");
const {
  AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");
const { AutoIncrement } = require("@keystonejs/fields-auto-increment");
const { Content } = require("@keystonejs/fields-content");
const {
  Text,
  Password,
  CalendarDay,
  Checkbox,
  DateTime,
  DateTimeUtc,
  Decimal,
  Float,
  Integer,
  Relationship,
  Select,
  Slug,
  Uuid,
  Virtual,
} = require("@keystonejs/fields");
const keystone = index.indexKey;

console.log("Creating TweedleDum");
keystone.createList("TweedledumItem", {
  fields: {
    firstName: { type: Text },
    lastName: { type: Text },
    virtual: {
      type: Virtual,
      resolver: (item) => `${item.firstName} ${item.lastName}`,
    },
    increment: { type: AutoIncrement, gqlType: "Int" },
    password: { type: Password },
    calandarDay: {
      type: CalendarDay,
      dateFrom: "2001-01-16",
      dateTo: "2020-05-20",
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
      yearRangeFrom: 1901,
      yearRangeTo: 2018,
      yearPickerType: "auto",
    },
    dateTimeUTC: { type: DateTimeUtc },
    decimal: { type: Decimal },
    float: { type: Float },
    integer: { type: Integer },
    select: { type: Select, options: "pending, processed" },
    slug: { type: Slug },
    uuid: { type: Uuid, caseTo: "upper" },
    author: {
      type: AuthedRelationship,
      ref: "TweedledeeItem",
    },
    relationship: { type: Relationship, ref: "TweedledeeItem", many: true },
  },
  //labelResolver: (item) => `${item.name}`,
});
