import { checkbox } from "@keystone-next/fields";

export const permissionFields = {
  canManagePosts: checkbox({
    defaultValue: false,
    label: "User can Update and delete any post",
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: "User can Query other users",
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: "User can Edit other users",
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: "User can CRUD roles",
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];
