import { getPost } from '@/app/api/fetchData';

interface PostParams {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostParams) {
  const post = await getPost(params.slug);

  const { id, date, title, content, coverImage } = post[0];

  return (
    <article>
      <h1>{title}</h1>
    </article>
  );
}
