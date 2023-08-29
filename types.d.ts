import z from "zod";
import { postSchema, postsSchema } from "./models/zod";

export type Post = z.infer<typeof postSchema>;
export type Posts = z.infer<typeof postsSchema>;
