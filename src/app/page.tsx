import { getStaticProps } from './api/fetchData';

export default async function Home({ props }) {
  console.log('here props - ', props);
  return <div>Hello world</div>;
}
