"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/services/post";
import PostCard from "../post-card";

const PostsList = () => {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });

  if (isLoading)
    return (
      <div className="flex flex-col gap-y-6 items-center">
        <div className="max-w-4xl w-full animate-pulse bg-slate-200 sm:h-[168px] py-8 px-6 flex flex-col gap-y-10">
          <div className="flex justify-between items-start">
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-72 max-w-full"></div>
              <div className="bg-slate-300 animate-pulse h-3 w-44 mt-2"></div>
            </div>
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-16 hidden sm:block"></div>
            </div>
          </div>
          <div className="bg-slate-300 animate-pulse h-12 sm:h-4 max-w-full"></div>
          <div className="flex justify-center sm:hidden">
            <div className="bg-slate-300 animate-pulse h-5 w-16"></div>
          </div>
        </div>
        <div className="max-w-4xl w-full animate-pulse bg-slate-200 sm:h-[168px] py-8 px-6 flex flex-col gap-y-10">
          <div className="flex justify-between items-start">
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-72 max-w-full"></div>
              <div className="bg-slate-300 animate-pulse h-3 w-44 mt-2"></div>
            </div>
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-16 hidden sm:block"></div>
            </div>
          </div>
          <div className="bg-slate-300 animate-pulse h-12 sm:h-4 max-w-full"></div>
          <div className="flex justify-center sm:hidden">
            <div className="bg-slate-300 animate-pulse h-5 w-16"></div>
          </div>
        </div>
        <div className="max-w-4xl w-full animate-pulse bg-slate-200 sm:h-[168px] py-8 px-6 flex flex-col gap-y-10">
          <div className="flex justify-between items-start">
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-72 max-w-full"></div>
              <div className="bg-slate-300 animate-pulse h-3 w-44 mt-2"></div>
            </div>
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-16 hidden sm:block"></div>
            </div>
          </div>
          <div className="bg-slate-300 animate-pulse h-12 sm:h-4 max-w-full"></div>
          <div className="flex justify-center sm:hidden">
            <div className="bg-slate-300 animate-pulse h-5 w-16"></div>
          </div>
        </div>
        <div className="max-w-4xl w-full animate-pulse bg-slate-200 sm:h-[168px] py-8 px-6 flex flex-col gap-y-10">
          <div className="flex justify-between items-start">
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-72 max-w-full"></div>
              <div className="bg-slate-300 animate-pulse h-3 w-44 mt-2"></div>
            </div>
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-16 hidden sm:block"></div>
            </div>
          </div>
          <div className="bg-slate-300 animate-pulse h-12 sm:h-4 max-w-full"></div>
          <div className="flex justify-center sm:hidden">
            <div className="bg-slate-300 animate-pulse h-5 w-16"></div>
          </div>
        </div>
        <div className="max-w-4xl w-full animate-pulse bg-slate-200 sm:h-[168px] py-8 px-6 flex flex-col gap-y-10">
          <div className="flex justify-between items-start">
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-72 max-w-full"></div>
              <div className="bg-slate-300 animate-pulse h-3 w-44 mt-2"></div>
            </div>
            <div>
              <div className="bg-slate-300 animate-pulse h-5 w-16 hidden sm:block"></div>
            </div>
          </div>
          <div className="bg-slate-300 animate-pulse h-12 sm:h-4 max-w-full"></div>
          <div className="flex justify-center sm:hidden">
            <div className="bg-slate-300 animate-pulse h-5 w-16"></div>
          </div>
        </div>
      </div>
    );

  if (error) return "An error has occurred: " + error;

  return (
    <ul className="flex flex-col gap-y-6 items-center">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
export default PostsList;
