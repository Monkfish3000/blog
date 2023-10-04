import formatDate from '@/utils/formateDate';

const Article = ({ id, date, title, content, author }) => {
  const { html } = content;
  return (
    <article className="m-8 grid grid-cols-4 w-5/6">
      <section className="col-span-1 mt-6 p-2">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600">{formatDate(date)}</p>
        <p className="text-customBlue">By {author.name}</p>
      </section>
      <section
        className="col-span-3 border-l-2 border-customBlue border-opacity-25 mt-6 p-2"
        dangerouslySetInnerHTML={{ __html: html }}
      ></section>
    </article>
  );
};

export default Article;
