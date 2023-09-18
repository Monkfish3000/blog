import Image from 'next/image';
import { getData } from './api/fetchData';
import PostCard from './components/PostCard';

export default async function Home() {
  const data = await getData();

  const { posts } = data.props;
  const coverImage = posts[0].coverImage.url;

  return (
    <>
      <header className="relative w-full h-[80vh]">
        <Image
          className="object-cover w-full h-full"
          src={coverImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-white text-center mx-auto w-[50%]">
          <h1 className="text-3xl font-extrabold">{posts[0].title}</h1>
        </div>
      </header>
      <section>
        <PostCard />
      </section>
    </>
  );
}
