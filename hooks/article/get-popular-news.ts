import { createClient } from "contentful";

interface NewsArticleFields {
  clickCount: number;
  title: string;
  author: string;
  createdAt: Date;
  slug: string;
  sys: any;
  category: any;
  fields: string;
  name: string;
  excerpt: string;
  featuredImage: any;
  publishedAt: any;
}

// interface NewsArticle extends Entry<NewsArticleFields> {};

const client = createClient({
  space: "46qpezirv3k8",
  accessToken: "IS_9497XlMwHMjP64Riv3m01m5n5vSB4589fPL7f7gI",
});

export async function getPopularNews() {
  try {
    const entries = await client.getEntries<NewsArticleFields>({
      content_type: "article",
      limit: 8,
    });
    return entries.items
      .sort((a, b) => {
        if (a.fields.clickCount && b.fields.clickCount) {
          return b.fields.clickCount - a.fields.clickCount;
        }
        return 0;
      })
      .map((entry) => ({
        title: entry.fields.title,
        author: entry.fields.hasOwnProperty("author")
          ? entry.fields.author
          : "",
        createdAt: entry.sys.createdAt,
        slug: entry.fields.slug,
        category: entry.fields.category.fields.name,
        excerpt: entry.fields.hasOwnProperty("excerpt")
          ? entry.fields.excerpt
          : null,
        featuredImage: {
          height: entry.fields.featuredImage[0].height,
          width: entry.fields.featuredImage[0].width,
          id: entry.fields.featuredImage[0].public_id,
          url: entry.fields.featuredImage[0].url,
        },
        sys: {
          publishedAt: entry.sys.updatedAt,
        },
      }));
  } catch (err) {
    console.error(err);
    return null;
  }
}

// export async function getPopularNews() {
//   try {
//     const entries = await client.getEntries<NewsArticleFields>({
//       content_type: "article",
//       select: "fields.clickCount",
//     });
//     return entries.items.sort((a, b) => {
//       if (a.fields && a.fields.clickCount && b.fields && b.fields.clickCount) {
//         return b.fields.clickCount - a.fields.clickCount;
//       }
//       return 0;
//     });
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }
