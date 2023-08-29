import { postsSchema } from "@/models/zod";
import type { Post } from "@/types";

const BASE_URL = "http://localhost:3000/api/posts";

const getAllPosts = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const parsedData = postsSchema.parse(data.posts);
  return parsedData;
};

const addPost = async (newPost: Omit<Post, "id" | "date" | "new">) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
};

export { getAllPosts, addPost };
