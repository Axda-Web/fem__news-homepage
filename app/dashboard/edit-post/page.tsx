import PostForm from "@/app/components/post-form";

export default async function EditPostPage() {
  return (
    <main>
      <h1 className="text-center text-3xl text-neutral--very-dark-blue font-bold py-10">
        Edit post
      </h1>
      <div className="flex justify-center">
        <PostForm editForm={true} />
      </div>
    </main>
  );
}
