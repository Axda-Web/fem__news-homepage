import z from "zod";

export const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.optional(
    z.object({
      default: z.optional(z.string()),
      mobile: z.optional(z.string()),
      desktop: z.optional(z.string()),
    })
  ),
  author: z.string(),
  likes: z.optional(z.number()),
  new: z.boolean(),
  date: z.string(),
  id: z.string(),
  featured: z.optional(z.boolean()),
});

export const postsSchema = z.array(postSchema);

export const PostFormDataSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { message: "Title must contain at least 3 characters" })
    .max(50, { message: "Title must contain at most 50 characters" }),
  author: z
    .string()
    .trim()
    .min(3, { message: "Author must contain at least 3 characters" })
    .max(50, { message: "Author must contain at most 50 characters" }),
  content: z
    .string()
    .trim()
    .min(20, { message: "Blog must contain at least 20 characters" })
    .max(1000, { message: "Blog must contain at most 1000 characters" }),
  likes: z.optional(z.number()),
});
