export type ArticleCollection = {
  articleCollection: {
    items: Article[];
  };
};

export type Article = {
  title: string;
  featuredImage: [
    {
      secure_url: string;
      width: string;
      height: string;
      public_id: string;
    }
  ];
  excerpt: string;
  category: {
    name: string;
  };
  body: {
    json: any;
  };
  slug: string;
  sys: {
    publishedAt: Date;
  };
  author: string;
};

export type CategoryCollection = {
  categoryCollection: {
    items: Category[];
  };
};

export type Category = {
  name: string;
  slug: string;
};

export type Currency = {
  motd: {
    msg: string;
    url: string;
  };
  success: boolean;
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    rate: number;
  };
  historical: boolean;
  date: string;
  result: number;
};
