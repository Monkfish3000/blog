import { getPost } from '@/app/api/fetchData';

export default async function Post({ params }) {
  const data = await getPost(params.slug);

  const { posts } = data;
  const post = posts[0];
  const { id, date, title, content, coverImage } = post;

  return <h1>{title}</h1>;
}
