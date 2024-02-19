import Image from 'next/image';

import { getPost } from '@/app/api/fetchData';
import Article from '@/app/components/Article';
import ProgressBar from '@/app/components/ProgressBar';
import Header from '@/app/components/Header';
import { revalidatePath } from 'next/cache';

interface PostParams {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostParams) {
  revalidatePath('/articles');
  const post = await getPost(params.slug);

  const {
    id,
    date,
    title,
    content,
    coverImage: { url: imgUrl },
    author,
    excerpt,
  } = post[0];

  return (
    <>
      <Header title={title} />
      <header className="relative w-full h-[80vh] flex justify-center items-center">
        <Image
          className="object-cover w-full h-full scale-[1.07]"
          src={imgUrl}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-white dark:bg-customBlack text-center z-10 p-4 w-[75%]">
          <h1 className=" text-xl ">{excerpt}</h1>
        </div>
      </header>
      <ProgressBar />
      <Article
        id={id}
        date={date}
        content={content}
        title={title}
        author={author}
      />
    </>
  );
}
