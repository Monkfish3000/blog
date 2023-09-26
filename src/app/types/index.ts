interface Author {
  name: string;
  picture: {
    url: string;
  };
}

interface Content {
  html: string;
}

interface CoverImage {
  url: string;
}

interface Post {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  content: Content;
  author: Author;
  coverImage: CoverImage;
}

export interface QueryResponse {
  posts: Post[];
}
