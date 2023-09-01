"use client";

import { Post, Posts } from "@/types";
import { FaRegEdit } from "react-icons/fa";
import { TbHeart } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "@/services/post";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: deletePost,
    // When mutate is called:
    onMutate: async (mutatedPost) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // Snapshot the previous value
      const previousPosts = queryClient.getQueryData(["posts"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["posts"], (oldPosts: any) =>
        oldPosts.filter((p: Post) => p.id !== mutatedPost)
      );

      // Return a context object with the snapshotted value
      return { previousPosts };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, mutatedPost, context) => {
      queryClient.setQueryData(["posts"], context?.previousPosts);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return (
    <li key={post.id} className="max-w-4xl w-full">
      <article className="bg-neutral--very-dark-blue py-8 px-6 flex flex-col gap-y-6 hover:shadow-xl shadow-neutral--very-dark-blue">
        <div className="flex justify-between items-start">
          <div>
            <Link href={`/posts/${post.id}`}>
              <h3 className="text-neutral--off-white text-xl font-extrabold hover:text-accent--soft-orange transition-colors">
                {post.title}
              </h3>
            </Link>
            <span className="text-neutral--grayish-blue font-light text-xs flex gap-x-1 items-center">
              {post.author} | {new Date(post.date).toLocaleDateString()} |{" "}
              {post.likes}{" "}
              <TbHeart className="text-sm text-neutral--grayish-blue" />
            </span>
          </div>
          <div className="gap-x-4 hidden sm:flex">
            <Link href={`/dashboard/edit-post?id=${post.id}`}>
              <FaRegEdit className="text-accent--soft-red text-lg" />
            </Link>
            <button onClick={() => postMutation.mutate(post.id)}>
              <RiDeleteBin6Line className="text-accent--soft-red text-lg" />
            </button>
          </div>
        </div>
        <p className="overflow-hidden text-ellipsis line-clamp-2 sm:line-clamp-1">
          {post.content}
        </p>
        <div className="gap-x-4 flex justify-center sm:hidden">
          <Link href={`/dashboard/edit-post?id=${post.id}`}>
            <FaRegEdit className="text-accent--soft-red text-lg" />
          </Link>
          <button onClick={() => postMutation.mutate(post.id)}>
            <RiDeleteBin6Line className="text-accent--soft-red text-lg" />
          </button>
        </div>
      </article>
    </li>
  );
};
export default PostCard;
