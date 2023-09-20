import React from 'react';

const PostCard = ({ title, coverImage, date, excerpt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
