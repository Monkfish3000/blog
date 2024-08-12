import formatDate from "@/utils/formateDate";
import DOMPurify from "isomorphic-dompurify";

import styles from "../styles/custom.module.css";

interface ArticleProps {
  id: number;
  date: string;
  title: string;
  content: {
    html: string;
  };
  author: {
    name: string;
  };
}

const Article: React.FC<ArticleProps> = ({
  id,
  date,
  title,
  content,
  author,
}) => {
  const { html } = content;

  const cleanedHTML = DOMPurify.sanitize(html);

  return (
    // DESKTOP VIEW
    <article className="m-8 grid grid-cols-4 w-5/6">
      <aside className="col-span-1 mt-6 p-2">
        <div className="sticky top-10 hidden sm:block">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600">{formatDate(date)}</p>
          {author && <p className="text-customBlue">By {author.name}</p>}
        </div>
      </aside>

      {/* {MOBILE VIEW} */}
      <aside className="sm:hidden col-span-4">
        <p className="text-gray-600">{formatDate(date)}</p>
        {author && <p className="text-customBlue">By {author.name}</p>}
      </aside>
      <section
        className={`col-span-4 sm:col-span-3 border-l-2 border-customBlue border-opacity-25 mt-6 p-2 ${styles.richText}`}
        dangerouslySetInnerHTML={{ __html: cleanedHTML }}
      ></section>
    </article>
  );
};

export default Article;
