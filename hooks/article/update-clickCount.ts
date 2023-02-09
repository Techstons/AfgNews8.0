const contentful = require("contentful-management");

const client = contentful.createClient({
  space: "46qpezirv3k8",
  accessToken: "CFPAT-pwYVRBVu2mUUsNjE263px2fsMfj2J010329GKWppTmY",
});

export async function HelloPo() {
  await client.getSpace("46qpezirv3k8").then((space: any) => {
    space.getEnvironment("master").then((environment: any) => {
      environment
        .getEntries({ "sys.id": "28msMaEMj4FNPg5V3IxunH" })
        .then((entries: any) => {
          entries.items.map((entry: any) => {
            entry.fields.clickCount = { en: 15 };
            entry.update().then(() => {
              console.log("updated successfully");
              environment
                .getEntries({ "sys.id": "28msMaEMj4FNPg5V3IxunH" })
                .then((entries: any) => {
                  entries.items.map((entry: any) => {
                    console.log(entry.fields.clickCount);
                    entry
                      .publish()
                      .then(() => console.log("publushed successfully"));
                  });
                });
            });
          });
        });
    });
  });
}

// export async function HelloPo() {
//   await client.getSpace("46qpezirv3k8").then((space: any) => {
//     space.getEnvironment("master").then((environment: any) => {
//       environment
//         .getEntries({ "sys.id": "28msMaEMj4FNPg5V3IxunH" })
//         .then((entries: any) => {
//           const entry = entries.items[0];
//           entry.fields.clickCount = { en: 13 };
//           return environment
//             .getEntry(entry.sys.id, { excludeLinks: true, exclude: 1 })
//             .then((refreshedEntry: any) => {
//               refreshedEntry.fields.clickCount = { en: 13 };
//               return refreshedEntry.publish().then(() => {
//                 console.log("Entry published successfully");
//               });
//             });
//         });
//     });
//   });
// }
