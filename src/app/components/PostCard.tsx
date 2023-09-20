import formatDate from '@/utils/formateDate';
import React from 'react';

interface PostCardProps {
  title: string;
  img: string;
  date: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, img, date, excerpt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{formatDate(date)}</p>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
