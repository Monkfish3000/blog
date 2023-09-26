import { getData } from '@/app/api/fetchData';

const data = await getData();

const { posts } = data.props;

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const getPostData = (slug: string) => {
  return posts.find((post) => post.slug === slug);
};

export default async function Post({ params }) {
  const postData = getPostData(params.slug);
  return <h1>THIS IS WORKING: {postData?.title}</h1>;
}
