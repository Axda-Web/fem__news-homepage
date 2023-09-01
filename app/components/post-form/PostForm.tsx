"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getPost, addPost, updatePost } from "@/services/post";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostFormDataSchema } from "@/models/zod";
import { PostFormData } from "@/types";

type PostFormProps = {
  editForm?: boolean;
};
const PostForm = ({ editForm }: PostFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: post,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPost(id as unknown as string),
  });

  const addPostMutation = useMutation({
    mutationFn: (newTodo: PostFormData) => {
      return addPost(newTodo);
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: (newTodo: PostFormData) => {
      return updatePost(id as unknown as string, newTodo);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(PostFormDataSchema),
    // defaultValues: {
    //   title: post?.id ? post?.title : "Loading...",
    //   author: post?.id ? post?.author : "Loading...",
    //   content: post?.id ? post?.content : "Loading...",
    // },
  });

  if (isLoading)
    return (
      <div className="flex flex-col gap-y-6 w-full max-w-xl">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <div className="h-5 bg-slate-200 animate-pulse w-16" />
            <div className="h-10 bg-slate-200 animate-pulse p-2" />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="h-5 bg-slate-200 animate-pulse w-16" />
            <div className="h-10 bg-slate-200 animate-pulse p-2" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="h-5 bg-slate-200 animate-pulse w-16" />
          <div className="h-[538px] bg-slate-200 animate-pulse p-2" />
        </div>
        <div className="h-12 bg-slate-200 animate-pulse p-2 self-center w-44" />
      </div>
    );
  if (error) return <div>Error</div>;

  const onSubmit = (data: PostFormData) => {
    try {
      editForm ? updatePostMutation.mutate(data) : addPostMutation.mutate(data);
      reset();
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-6 w-full max-w-xl"
    >
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-neutral--very-dark-blue text-base font-semibold"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            defaultValue={editForm ? post?.title : ""}
            className="border border-neutral--grayish-blue p-2"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="author"
            className="text-neutral--very-dark-blue text-base font-semibold"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            {...register("author")}
            defaultValue={editForm ? post?.author : ""}
            className="border border-neutral--grayish-blue p-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="content"
          className="text-neutral--very-dark-blue text-base font-semibold"
        >
          Content
        </label>
        <textarea
          id="content"
          {...register("content")}
          defaultValue={editForm ? post?.content : ""}
          cols={30}
          rows={20}
          className="border border-neutral--grayish-blue p-2"
        ></textarea>
      </div>
      <input
        type="submit"
        value={editForm ? "Edit post" : "Add post"}
        className="bg-accent--soft-red text-neutral--off-white text-sm uppercase py-3 px-8 tracking-[4.38px] hover:bg-neutral--very-dark-blue transition-colors self-center"
      />
    </form>
  );
};
export default PostForm;
