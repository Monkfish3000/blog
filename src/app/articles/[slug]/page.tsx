import Image from 'next/image';

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
    <header className="relative w-full h-[80vh] flex justify-center items-center">
      <Image
        className="object-cover w-full h-full scale-[1.07]"
        src={coverImage.url}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="bg-white text-center z-10 p-4 w-[75%]">
        <h1 className="text-2xl font-extrabold">{title}</h1>
      </div>
    </header>
  );
}
