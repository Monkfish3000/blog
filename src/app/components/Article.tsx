import formatDate from '@/utils/formateDate';

const Article = ({ id, date, title, content, author }) => {
  const { html } = content;
  return (
    <article className="m-8 grid grid-cols-4 w-5/6">
      <section className="col-span-1">
        <h1>{title}</h1>
        <p>{formatDate(date)}</p>
        <p>By {author.name}</p>
      </section>
      <section
        className="col-span-3"
        dangerouslySetInnerHTML={{ __html: html }}
      ></section>
    </article>
  );
};

export default Article;
