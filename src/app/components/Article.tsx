import React from 'react';

const Article = ({ id, data, content }) => {
  const { html } = content;
  return <article>{html}</article>;
};

export default Article;
