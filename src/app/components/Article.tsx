const Article = ({ id, date, title, content }) => {
  const { html } = content;
  return (
    <article className="mt-8 grid grid-cols-3">
      <section className="col-span-1">
        <h1>{title}</h1>
        <p>{date}</p>
      </section>
      <section
        className="col-span-2"
        dangerouslySetInnerHTML={{ __html: html }}
      ></section>
    </article>
  );
};

export default Article;
