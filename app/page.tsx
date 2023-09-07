import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "../services/post";

export const metadata: Metadata = {
  title: "W. | Home",
  description: "Check the latest Tech news!",
};

export default async function Home() {
  const posts = await getAllPosts();

  const featuredPost = posts?.find((post) => post.featured);
  const newPosts = posts
    ?.filter((post) => post.new)
    .slice(0, 3)
    .sort((a, b) => b.date.localeCompare(a.date));
  const topPosts = posts?.sort((a, b) => b?.likes! - a?.likes!).slice(0, 3);

  return (
    <main className="space-y-16 md:space-y-20 xl:space-y-24">
      <div className="xl:grid xl:h-[511px] xl:grid-cols-3 xl:gap-x-7 space-y-16 md:space-y-20 xl:space-y-0">
        <article className="md:grid md:grid-cols-2 md:grid-rows-[repeat(2, auto)] md:col-span-2 md:row-span-2 md:gap-6">
          <Image
            className="sm:hidden mb-6 w-full h-auto"
            src={featuredPost?.image?.mobile!}
            width={343}
            height={300}
            alt="article thumbnail"
            priority
          />
          <Image
            className="hidden sm:block sm:col-span-2 w-full h-auto"
            src={featuredPost?.image?.desktop!}
            width={730}
            height={300}
            alt="article thumbnail"
            priority
          />
          <div>
            <h1 className="text-[40px] md:text-[56px] text-neutral--very-dark-blue font-extrabold leading-[56px] mb-4 sm:mb-0">
              {featuredPost?.title}
            </h1>
          </div>
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-start space-y-6 sm:space-y-0">
            <p className="">{featuredPost?.content}</p>
            <Link
              className="bg-accent--soft-red text-neutral--off-white text-sm uppercase py-3 px-8 tracking-[4.38px] hover:bg-neutral--very-dark-blue transition-colors inline-block"
              href={`/posts/${featuredPost?.id}`}
            >
              Read more
            </Link>
          </div>
        </article>
        <aside className="sm:row-span-2 bg-neutral--very-dark-blue px-6 py-8">
          <h2 className="text-accent--soft-orange font-bold text-[32px] sm:text-[40px]">
            New
          </h2>
          <ul className="divide-y-2 divide-neutral--dark-grayish-blue">
            {newPosts.map((post) => (
              <li key={post.id} className="py-8">
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-neutral--off-white text-xl font-extrabold hover:text-accent--soft-orange transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <section>
        <ul className="md:flex md:flex-wrap md:items-center xl:justify-between md:gap-6 space-y-8 md:space-y-0">
          {topPosts.map((post, index) => (
            <li key={post.id}>
              <article className="flex gap-x-6 justify-between max-w-[350px]">
                <Image
                  src={post?.image?.default!}
                  width={100}
                  height={127}
                  alt="article thumbnail"
                />
                <div className="flex flex-col justify-between py-1">
                  <span className="text-[32px] font-bold text text-neutral--grayish-blue">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <Link href={`/posts/${post.id}`}>
                    <h3 className="font-extrabold text-lg hover:text-accent--soft-red whitespace-nowrap">
                      {post.title}
                    </h3>
                  </Link>
                  <p>{post.content}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
