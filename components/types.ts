export interface Article {
  featuredImage: {
    url: string;
    width: string;
    height: string;
    id: string;
  };
  category: string;
  createdAt: Date;
  title: string;
  excerpt: string;
  body: {
    json: any;
  };
  slug: string;
  author: string;
}
