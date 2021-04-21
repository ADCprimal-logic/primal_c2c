// import { relationship, text } from "@keystone-next/fields";
// import { list } from "@keystone-next/keystone/schema";

// export const PersonalAddress = list({
//         fields: {
//             street: text({ isRequired: true}),
//             city: text({ isRequired: true }),
//             state: text({ isRequired: true }),
//             zipcode: text({ isRequired: true }),
//             user: relationship({
//                 ref: "User.name",
// 		}),
//     },
//         ui: {
// 		listView: {
// 			initialColumns: ["street", "city", "state", "zipcode"],
// 		},
//         }
//     })
