import PostForm from "@/app/components/post-form";

export default async function AddNewPostPage() {
  return (
    <main>
      <h1 className="text-center text-3xl text-neutral--very-dark-blue font-bold py-10">
        Add new post
      </h1>
      <div className="flex justify-center">
        <PostForm />
      </div>
    </main>
  );
}
