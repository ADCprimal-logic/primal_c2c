type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type PersonalAddressRelateToOneInput = {
  readonly create?: PersonalAddressCreateInput | null;
  readonly connect?: PersonalAddressWhereUniqueInput | null;
  readonly disconnect?: PersonalAddressWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PostRelateToManyInput = {
  readonly create?: ReadonlyArray<PostCreateInput | null> | null;
  readonly connect?: ReadonlyArray<PostWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<PostWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleRelateToOneInput = {
  readonly create?: RoleCreateInput | null;
  readonly connect?: RoleWhereUniqueInput | null;
  readonly disconnect?: RoleWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly address?: PersonalAddressWhereInput | null;
  readonly address_is_null?: Scalars['Boolean'] | null;
  readonly posts_every?: PostWhereInput | null;
  readonly posts_some?: PostWhereInput | null;
  readonly posts_none?: PostWhereInput | null;
  readonly role?: RoleWhereInput | null;
  readonly role_is_null?: Scalars['Boolean'] | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'address_ASC'
  | 'address_DESC'
  | 'posts_ASC'
  | 'posts_DESC'
  | 'role_ASC'
  | 'role_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly address?: PersonalAddressRelateToOneInput | null;
  readonly posts?: PostRelateToManyInput | null;
  readonly role?: RoleRelateToOneInput | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly address?: PersonalAddressRelateToOneInput | null;
  readonly posts?: PostRelateToManyInput | null;
  readonly role?: RoleRelateToOneInput | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PersonalAddressWhereInput = {
  readonly AND?: ReadonlyArray<PersonalAddressWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PersonalAddressWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly street?: Scalars['String'] | null;
  readonly street_not?: Scalars['String'] | null;
  readonly street_contains?: Scalars['String'] | null;
  readonly street_not_contains?: Scalars['String'] | null;
  readonly street_starts_with?: Scalars['String'] | null;
  readonly street_not_starts_with?: Scalars['String'] | null;
  readonly street_ends_with?: Scalars['String'] | null;
  readonly street_not_ends_with?: Scalars['String'] | null;
  readonly street_i?: Scalars['String'] | null;
  readonly street_not_i?: Scalars['String'] | null;
  readonly street_contains_i?: Scalars['String'] | null;
  readonly street_not_contains_i?: Scalars['String'] | null;
  readonly street_starts_with_i?: Scalars['String'] | null;
  readonly street_not_starts_with_i?: Scalars['String'] | null;
  readonly street_ends_with_i?: Scalars['String'] | null;
  readonly street_not_ends_with_i?: Scalars['String'] | null;
  readonly street_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly street_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city?: Scalars['String'] | null;
  readonly city_not?: Scalars['String'] | null;
  readonly city_contains?: Scalars['String'] | null;
  readonly city_not_contains?: Scalars['String'] | null;
  readonly city_starts_with?: Scalars['String'] | null;
  readonly city_not_starts_with?: Scalars['String'] | null;
  readonly city_ends_with?: Scalars['String'] | null;
  readonly city_not_ends_with?: Scalars['String'] | null;
  readonly city_i?: Scalars['String'] | null;
  readonly city_not_i?: Scalars['String'] | null;
  readonly city_contains_i?: Scalars['String'] | null;
  readonly city_not_contains_i?: Scalars['String'] | null;
  readonly city_starts_with_i?: Scalars['String'] | null;
  readonly city_not_starts_with_i?: Scalars['String'] | null;
  readonly city_ends_with_i?: Scalars['String'] | null;
  readonly city_not_ends_with_i?: Scalars['String'] | null;
  readonly city_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state?: Scalars['String'] | null;
  readonly state_not?: Scalars['String'] | null;
  readonly state_contains?: Scalars['String'] | null;
  readonly state_not_contains?: Scalars['String'] | null;
  readonly state_starts_with?: Scalars['String'] | null;
  readonly state_not_starts_with?: Scalars['String'] | null;
  readonly state_ends_with?: Scalars['String'] | null;
  readonly state_not_ends_with?: Scalars['String'] | null;
  readonly state_i?: Scalars['String'] | null;
  readonly state_not_i?: Scalars['String'] | null;
  readonly state_contains_i?: Scalars['String'] | null;
  readonly state_not_contains_i?: Scalars['String'] | null;
  readonly state_starts_with_i?: Scalars['String'] | null;
  readonly state_not_starts_with_i?: Scalars['String'] | null;
  readonly state_ends_with_i?: Scalars['String'] | null;
  readonly state_not_ends_with_i?: Scalars['String'] | null;
  readonly state_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly zipcode?: Scalars['String'] | null;
  readonly zipcode_not?: Scalars['String'] | null;
  readonly zipcode_contains?: Scalars['String'] | null;
  readonly zipcode_not_contains?: Scalars['String'] | null;
  readonly zipcode_starts_with?: Scalars['String'] | null;
  readonly zipcode_not_starts_with?: Scalars['String'] | null;
  readonly zipcode_ends_with?: Scalars['String'] | null;
  readonly zipcode_not_ends_with?: Scalars['String'] | null;
  readonly zipcode_i?: Scalars['String'] | null;
  readonly zipcode_not_i?: Scalars['String'] | null;
  readonly zipcode_contains_i?: Scalars['String'] | null;
  readonly zipcode_not_contains_i?: Scalars['String'] | null;
  readonly zipcode_starts_with_i?: Scalars['String'] | null;
  readonly zipcode_not_starts_with_i?: Scalars['String'] | null;
  readonly zipcode_ends_with_i?: Scalars['String'] | null;
  readonly zipcode_not_ends_with_i?: Scalars['String'] | null;
  readonly zipcode_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly zipcode_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly resident?: UserWhereInput | null;
  readonly resident_is_null?: Scalars['Boolean'] | null;
};

export type PersonalAddressWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPersonalAddressesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'street_ASC'
  | 'street_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'state_ASC'
  | 'state_DESC'
  | 'zipcode_ASC'
  | 'zipcode_DESC'
  | 'resident_ASC'
  | 'resident_DESC';

export type PersonalAddressUpdateInput = {
  readonly street?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly state?: Scalars['String'] | null;
  readonly zipcode?: Scalars['String'] | null;
  readonly resident?: UserRelateToOneInput | null;
};

export type PersonalAddressesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PersonalAddressUpdateInput | null;
};

export type PersonalAddressCreateInput = {
  readonly street?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly state?: Scalars['String'] | null;
  readonly zipcode?: Scalars['String'] | null;
  readonly resident?: UserRelateToOneInput | null;
};

export type PersonalAddressesCreateInput = {
  readonly data?: PersonalAddressCreateInput | null;
};

export type PostImageRelateToOneInput = {
  readonly create?: PostImageCreateInput | null;
  readonly connect?: PostImageWhereUniqueInput | null;
  readonly disconnect?: PostImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type TagRelateToManyInput = {
  readonly create?: ReadonlyArray<TagCreateInput | null> | null;
  readonly connect?: ReadonlyArray<TagWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<TagWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PostWhereInput = {
  readonly AND?: ReadonlyArray<PostWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PostWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: PostImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly publishDate_not?: Scalars['String'] | null;
  readonly publishDate_lt?: Scalars['String'] | null;
  readonly publishDate_lte?: Scalars['String'] | null;
  readonly publishDate_gt?: Scalars['String'] | null;
  readonly publishDate_gte?: Scalars['String'] | null;
  readonly publishDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly publishDate_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly author?: UserWhereInput | null;
  readonly author_is_null?: Scalars['Boolean'] | null;
  readonly tags_every?: TagWhereInput | null;
  readonly tags_some?: TagWhereInput | null;
  readonly tags_none?: TagWhereInput | null;
};

export type PostWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPostsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'publishDate_ASC'
  | 'publishDate_DESC'
  | 'author_ASC'
  | 'author_DESC'
  | 'tags_ASC'
  | 'tags_DESC';

export type PostUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly photo?: PostImageRelateToOneInput | null;
  readonly content?: Scalars['JSON'] | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly tags?: TagRelateToManyInput | null;
};

export type PostsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PostUpdateInput | null;
};

export type PostCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly photo?: PostImageRelateToOneInput | null;
  readonly content?: Scalars['JSON'] | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly tags?: TagRelateToManyInput | null;
};

export type PostsCreateInput = {
  readonly data?: PostCreateInput | null;
};

export type TagWhereInput = {
  readonly AND?: ReadonlyArray<TagWhereInput | null> | null;
  readonly OR?: ReadonlyArray<TagWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly posts_every?: PostWhereInput | null;
  readonly posts_some?: PostWhereInput | null;
  readonly posts_none?: PostWhereInput | null;
};

export type TagWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortTagsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'posts_ASC'
  | 'posts_DESC';

export type TagUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly posts?: PostRelateToManyInput | null;
};

export type TagsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: TagUpdateInput | null;
};

export type TagCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly posts?: PostRelateToManyInput | null;
};

export type TagsCreateInput = {
  readonly data?: TagCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type PostRelateToOneInput = {
  readonly create?: PostCreateInput | null;
  readonly connect?: PostWhereUniqueInput | null;
  readonly disconnect?: PostWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PostImageWhereInput = {
  readonly AND?: ReadonlyArray<PostImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PostImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly post?: PostWhereInput | null;
  readonly post_is_null?: Scalars['Boolean'] | null;
};

export type PostImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPostImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'post_ASC'
  | 'post_DESC';

export type PostImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly post?: PostRelateToOneInput | null;
};

export type PostImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PostImageUpdateInput | null;
};

export type PostImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly post?: PostRelateToOneInput | null;
};

export type PostImagesCreateInput = {
  readonly data?: PostImageCreateInput | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleWhereInput = {
  readonly AND?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly canManagePosts?: Scalars['Boolean'] | null;
  readonly canManagePosts_not?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers_not?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers_not?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageRoles_not?: Scalars['Boolean'] | null;
  readonly assignedTo_every?: UserWhereInput | null;
  readonly assignedTo_some?: UserWhereInput | null;
  readonly assignedTo_none?: UserWhereInput | null;
};

export type RoleWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRolesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'canManagePosts_ASC'
  | 'canManagePosts_DESC'
  | 'canSeeOtherUsers_ASC'
  | 'canSeeOtherUsers_DESC'
  | 'canManageUsers_ASC'
  | 'canManageUsers_DESC'
  | 'canManageRoles_ASC'
  | 'canManageRoles_DESC'
  | 'assignedTo_ASC'
  | 'assignedTo_DESC';

export type RoleUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManagePosts?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RoleUpdateInput | null;
};

export type RoleCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManagePosts?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesCreateInput = {
  readonly data?: RoleCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields: 'id' | 'name' | 'email' | 'password' | 'address' | 'posts' | 'role';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly address?: string | null;
    readonly posts?: string | null;
    readonly role?: string | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type PersonalAddressListTypeInfo = {
  key: 'PersonalAddress';
  fields: 'id' | 'street' | 'city' | 'state' | 'zipcode' | 'resident';
  backing: {
    readonly id: string;
    readonly street?: string | null;
    readonly city?: string | null;
    readonly state?: string | null;
    readonly zipcode?: string | null;
    readonly resident?: string | null;
  };
  inputs: {
    where: PersonalAddressWhereInput;
    create: PersonalAddressCreateInput;
    update: PersonalAddressUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PersonalAddressWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPersonalAddressesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PersonalAddressListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PersonalAddressListTypeInfo,
    PersonalAddressListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PersonalAddressListTypeInfo,
  PersonalAddressListTypeInfo['fields']
>;

export type PostListTypeInfo = {
  key: 'Post';
  fields:
    | 'id'
    | 'title'
    | 'status'
    | 'photo'
    | 'content'
    | 'publishDate'
    | 'author'
    | 'tags';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly status?: string | null;
    readonly photo?: string | null;
    readonly content?: Record<string, any>[] | null;
    readonly publishDate?: Date | null;
    readonly author?: string | null;
    readonly tags?: string | null;
  };
  inputs: {
    where: PostWhereInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PostWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPostsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PostListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PostListTypeInfo,
    PostListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PostListTypeInfo,
  PostListTypeInfo['fields']
>;

export type TagListTypeInfo = {
  key: 'Tag';
  fields: 'id' | 'name' | 'posts';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly posts?: string | null;
  };
  inputs: {
    where: TagWhereInput;
    create: TagCreateInput;
    update: TagUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: TagWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortTagsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type TagListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    TagListTypeInfo,
    TagListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  TagListTypeInfo,
  TagListTypeInfo['fields']
>;

export type PostImageListTypeInfo = {
  key: 'PostImage';
  fields: 'id' | 'image' | 'altText' | 'post';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly post?: string | null;
  };
  inputs: {
    where: PostImageWhereInput;
    create: PostImageCreateInput;
    update: PostImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PostImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPostImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PostImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PostImageListTypeInfo,
    PostImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PostImageListTypeInfo,
  PostImageListTypeInfo['fields']
>;

export type RoleListTypeInfo = {
  key: 'Role';
  fields:
    | 'id'
    | 'name'
    | 'canManagePosts'
    | 'canSeeOtherUsers'
    | 'canManageUsers'
    | 'canManageRoles'
    | 'assignedTo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly canManagePosts?: boolean | null;
    readonly canSeeOtherUsers?: boolean | null;
    readonly canManageUsers?: boolean | null;
    readonly canManageRoles?: boolean | null;
    readonly assignedTo?: string | null;
  };
  inputs: {
    where: RoleWhereInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RoleWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRolesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RoleListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RoleListTypeInfo,
    RoleListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RoleListTypeInfo,
  RoleListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly PersonalAddress: PersonalAddressListTypeInfo;
  readonly Post: PostListTypeInfo;
  readonly Tag: TagListTypeInfo;
  readonly PostImage: PostImageListTypeInfo;
  readonly Role: RoleListTypeInfo;
};
