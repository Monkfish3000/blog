const Article = ({ id, data, content }) => {
  const { html } = content;
  return <article dangerouslySetInnerHTML={{ __html: html }}></article>;
};

export default Article;
