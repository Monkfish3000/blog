import { getPost } from '@/app/api/fetchData';

export default async function Post({ params }) {
  const post = await getPost(params.slug);

  const { posts } = post;

  const _post = posts[0];

  return <h1>THIS IS WORKING: {_post.title}</h1>;
}
