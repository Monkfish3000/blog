import Image from "next/image";
import dynamic from "next/dynamic";

import { getPost } from "@/app/api/fetchData";
import ProgressBar from "@/app/components/ProgressBar";
import Header from "@/app/components/Header";
import { revalidatePath } from "next/cache";
import { Suspense } from "react";

interface PostParams {
  params: {
    slug: string;
  };
}

const Article = dynamic(() => import("@/app/components/Article"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default async function Post({ params }: PostParams) {
  revalidatePath("/articles");
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
          priority
          className="object-cover w-full h-full scale-[1.07]"
          src={imgUrl}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="bg-white dark:bg-customBlack text-center z-10 p-4 w-[75%]">
          <h1 className=" text-xl ">{excerpt}</h1>
        </div>
      </header>
      <ProgressBar />
      <div id="article-content">
        <Suspense fallback={<div className="skeleton-screen">Loading...</div>}>
          <Article
            id={id}
            date={date}
            content={content}
            title={title}
            author={author}
          />
        </Suspense>
      </div>
    </>
  );
}
