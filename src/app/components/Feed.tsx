import React from 'react';

import PostCard from './PostCard';

interface Post {
  id: number;
  title: string;
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
    <div>
      {posts.map(({ id, title, coverImage, excerpt, date }) => (
        <PostCard
          key={id}
          title={title}
          img={coverImage.url}
          excerpt={excerpt}
          date={date}
        />
      ))}
    </div>
  );
};
