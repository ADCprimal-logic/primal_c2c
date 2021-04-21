import { createSchema, list } from "@keystone-next/keystone/schema";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
} from "@keystone-next/fields";
import { document } from "@keystone-next/fields-document";
import { PostImage } from "./schemas/PostImage";
import { Role } from "./schemas/Role";
import { isSignedIn, permissions, rules } from "./access";

export const lists = createSchema({
  // User Schema
  User: list({
    access: {
      create: () => true,
      read: rules.canManageUsers,
      update: rules.canManageUsers,
      delete: permissions.canManageUsers,
    },
    ui: {
      listView: {
        initialColumns: ["name", "posts", "address"],
      },
    },
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true }),
      password: password(),
      //phone: text({ isRequired: true }),
      //birthdate: text({ isRequired: true}),
      address: relationship({ ref: "PersonalAddress.resident" }),
      posts: relationship({ ref: "Post.author", many: true }),
      role: relationship({
        ref: "Role.assignedTo",
        access: {
          create: permissions.canManageUsers,
          update: permissions.canManageUsers,
        },
      }),
    },
  }),
  // Address Schema
  PersonalAddress: list({
    fields: {
      street: text({ isRequired: true }),
      city: text({ isRequired: true }),
      state: text({ isRequired: true }),
      zipcode: text({ isRequired: true }),
      resident: relationship({
        ref: "User.address",
      }),
    },
    ui: {
      listView: {
        initialColumns: ["street", "city", "state", "zipcode"],
      },
    },
  }),
  // Post Schema
  Post: list({
    access: {
      create: isSignedIn,
      read: rules.canReadPosts,
      update: rules.canManagePosts,
      delete: rules.canManagePosts,
    },
    fields: {
      title: text(),
      status: select({
        options: [
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
        ],
        ui: {
          displayMode: "segmented-control",
        },
      }),
      photo: relationship({
        ref: "PostImage.post",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] },
          inlineEdit: { fields: ["image", "altText"] },
        },
      }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      publishDate: timestamp(),
      author: relationship({
        ref: "User.posts",
        defaultValue: ({ context }) => ({
          connect: { id: context.session.itemId },
        }),
        ui: {
          displayMode: "cards",
          cardFields: ["name", "email"],
          inlineEdit: { fields: ["name", "email"] },
          linkToItem: true,
          inlineCreate: { fields: ["name", "email"] },
        },
      }),
      tags: relationship({
        ref: "Tag.posts",
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] },
        },
        many: true,
      }),
    },
  }),
  // Tag Schema
  Tag: list({
    ui: {
      isHidden: true,
    },
    fields: {
      name: text(),
      posts: relationship({
        ref: "Post.tags",
        many: true,
      }),
    },
  }),
  PostImage,
  Role,
});
