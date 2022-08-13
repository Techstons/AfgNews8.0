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
  "Realtime Currency Exchange Rate": {
    "1. From_Currency Code": string;
    "2. From_Currency Name": string;
    "3. To_Currency Code": string;
    "4. To_Currency Name": string;
    "5. Exchange Rate": string;
    "6. Last Refreshed": string;
    "7. Time Zone": string;
    "8. Bid Price": string;
    "9. Ask Price": string;
  };
};
