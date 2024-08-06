import Image from "next/image";
import { getPosts } from "./api/fetchData";
import { Feed } from "./components/Feed";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function Home() {
  const data = await getPosts();

  console.log("page -> ", data);

  const { posts } = data;
  const {
    coverImage: { url: imgUrl },
    title,
    slug,
  } = posts[0];

  return (
    <>
      <Header title={""} />
      <header className="relative w-full h-[80vh]">
        <Image
          className="object-cover w-full h-full"
          src={imgUrl}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-white dark:bg-customBlack text-center mx-auto w-[50%]">
          <Link href={`/articles/${slug}`}>
            <h1 className="text-3xl font-extrabold hover:text-customBlue">
              {title}
            </h1>
          </Link>
        </div>
      </header>
      <section className="m-auto w-4/5">
        <Feed posts={posts} />
      </section>
      <Footer />
    </>
  );
}
