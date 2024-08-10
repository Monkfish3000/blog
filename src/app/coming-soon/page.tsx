import Image from "next/image";
import { getPosts } from "../api/fetchData";
import { Feed } from "../components/Feed";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function Home() {
  const data = await getPosts();

  // console.log("page -> ", data);

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
          className="object-cover opacity-50"
          src="/assets/images/comingsoon.webp"
          alt="Coming soon"
          layout="fill"
          objectFit="cover"
        />
      </header>
      <section className="m-auto w-4/5"></section>
      <Footer />
    </>
  );
}
