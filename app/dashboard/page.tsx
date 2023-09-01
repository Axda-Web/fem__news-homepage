import Link from "next/link";
import { RiAddFill } from "react-icons/ri";
import { Metadata } from "next";
import PostsList from "../components/posts-list";

export const metadata: Metadata = {
  title: "W. | Dashboard",
  description: "Manage your data",
};

export default async function DashboardPage() {
  return (
    <main>
      <h1 className="text-center text-3xl text-neutral--very-dark-blue font-bold py-10">
        Dashboard
      </h1>
      <div className="flex flex-col items-center py-10">
        <Link
          className="bg-accent--soft-red text-neutral--off-white text-sm uppercase py-3 px-8 tracking-[4.38px] hover:bg-neutral--very-dark-blue transition-colors flex items-center gap-x-4"
          href="/dashboard/add-new-post"
        >
          Add new post <RiAddFill className="text-xl" />
        </Link>
      </div>
      <PostsList />
    </main>
  );
}
