import z from "zod";
import { postSchema, postsSchema, PostFormDataSchema } from "./models/zod";

export type Post = z.infer<typeof postSchema>;
export type Posts = z.infer<typeof postsSchema>;
export type PostFormData = z.infer<typeof PostFormDataSchema>;
