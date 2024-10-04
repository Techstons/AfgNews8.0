export interface Article {
  featuredImage: {
    url: string | null;
    width: string | null;
    height: string | null;
    id: string | null;
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

export interface ISection {
  title: string;
  articles?: Article[];
  slug: string;
}
