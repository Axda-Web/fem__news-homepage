import { postsSchema, postSchema } from "@/models/zod";
import type { Post, PostFormData } from "@/types";

const BASE_URL = `${process.env.VERCEL_URL}/api/posts`;

const getAllPosts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const parsedData = postsSchema.parse(data.posts);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (postId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${postId}`);
    const data = await response.json();
    const parsedData = postSchema.parse(data.post);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

const addPost = async (newPost: PostFormData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (postId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${postId}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (postId: string, newPost: PostFormData) => {
  try {
    const response = await fetch(`${BASE_URL}/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export { getAllPosts, getPost, addPost, deletePost, updatePost };
