import React from 'react';

import PostCard from './PostCard';

export const Feed = ({ posts }) => {
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
