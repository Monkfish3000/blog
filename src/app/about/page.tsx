import Link from "next/link";
import { Header } from "../components";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header title={"About Me"} />
      <section className="m-auto mt-16 w-3/4 sm:w-2/5">
        <h1 className="font-bold text-3xl mb-6">About MonkFish</h1>
        <p className="mb-20">
          Welcome to my digital fishpond! I'm Michael, also known as MonkFish.
          Born with a knack for code and a heart for innovation, I've carved my
          path as a Software Engineer, where the vibrant city of Barcelona
          serves as the backdrop to my tech adventures. In the ever-evolving
          landscape of EdTech, I stand at the crossroads where education meets
          technology. It's more than just writing code; it's about building
          bridges to knowledge. My journey in tech is fueled by an insatiable
          curiosity and a relentless pursuit of growth. From the intricate dance
          of CSS and JavaScript to the strategic structuring with React, each
          line of code is a step towards mastering the art of development. But
          it's not just about the tech. It's about the people, the learning, and
          the impact we can make together. Outside the matrix of development
          environments, you'll find me exploring the latest tech trends, diving
          deep into the world of open source, or sharing insights with fellow
          enthusiasts. This blog is my sandbox—a place to experiment, share, and
          connect with you, whether you're a seasoned developer, an EdTech
          aficionado, or simply intrigued by the power of technology to
          transform education. So, whether you're here for a deep dive into the
          frontend realm, a glimpse into the EdTech revolution, or just a good
          old tech talk, you're in the right place. Let's embark on this journey
          together, navigating the exciting world of technology, one post at a
          time.
        </p>
        <div className="flex justify-center mb-5">
          <Link
            className="font-extrabold cursor-pointer"
            target="_blank"
            href="https://michaelsutcliffe.dev"
          >
            Learn more!
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
