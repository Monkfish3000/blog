import { getData } from '@/app/api/fetchData';

export default async function Post() {
  const data = await getData();

  const { posts } = data.props;

  return <h1>Posts</h1>;
}
