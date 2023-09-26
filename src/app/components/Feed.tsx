import Link from 'next/link';

import PostCard from './PostCard';

interface Post {
  id: number;
  title: string;
  slug: string;
  coverImage: {
    url: string;
  };
  excerpt: string;
  date: string;
}

interface FeedProps {
  posts: Post[];
}

export const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className="flex flex-wrap -mx-2 mt-8">
      {posts.map(({ id, title, coverImage, excerpt, date, slug }) => (
        <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
          <Link href={`articles/${slug}`}>
            <PostCard
              title={title}
              img={coverImage.url}
              excerpt={excerpt}
              date={date}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
