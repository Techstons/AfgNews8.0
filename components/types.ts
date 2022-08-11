export interface Article {
  title: string;
  featuredImage: {
    url: string;
    width: string;
    height: string;
  };
  excerpt: string;
  category: string;
  body: {
    json: any;
  };
  slug: string;
  createdAt: Date;
  author: string;
}
