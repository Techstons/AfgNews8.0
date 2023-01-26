import { createClient } from "contentful";

const client = createClient({
  space: "46qpezirv3k8",
  accessToken: "IS_9497XlMwHMjP64Riv3m01m5n5vSB4589fPL7f7gI",
});

export async function getContentfulData() {
  try {
    const entries = await client.getEntries();
    return entries.items;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// let client: any = null;
// if (process.env.SPACE_ID && process.env.CONTENT_ACCESS_TOKEN) {
//   client = createClient({
//     space: process.env.SPACE_ID,
//     accessToken: process.env.CONTENT_ACCESS_TOKEN,
//   });
// }

// export async function getContentfulData() {
//   try {
//     const entries = await client.getEntries();
//     return entries.items;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }
