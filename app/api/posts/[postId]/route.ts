import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDB from "@/services/mongoose";
import Post from "@/models/post";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    const post = await Post.findOne({ id: id });
    return NextResponse.json(
      {
        message: "Post fetched successfully!",
        post,
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

export async function DELETE(
  request: Request,
  { params: { postId } }: { params: { postId: string } }
) {
  try {
    await connectToDB();
    const postToDelete = await Post.findByIdAndDelete(postId);
    return NextResponse.json(
      {
        message: "Post deleted successfully!",
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

export async function PUT(
  request: Request,
  { params: { postId } }: { params: { postId: string } }
) {
  const newPost = await request.json();
  try {
    await connectToDB();
    const updatedPost = await Post.findByIdAndUpdate(postId, newPost, {
      new: true,
    });
    return NextResponse.json(
      {
        message: "Post updated successfully!",
        post: updatedPost,
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
