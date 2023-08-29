import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDB from "@/services/mongoose";
import Post from "@/models/post";

export async function GET() {
  try {
    await connectToDB();
    const posts = await Post.find({});
    return NextResponse.json(
      {
        message: "Posts fetched successfully!",
        posts,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, author, likes } = await request.json();
    await connectToDB();
    const newPost = new Post({
      title,
      description,
      author,
      likes,
    });
    const addedPost = await newPost.save();
    return NextResponse.json({
      message: "Post added successfully!",
      post: addedPost,
    });
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}
