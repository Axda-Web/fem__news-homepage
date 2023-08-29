import z from "zod";

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.optional(
    z.object({
      default: z.optional(z.string()),
      mobile: z.optional(z.string()),
      desktop: z.optional(z.string()),
    })
  ),
  author: z.string(),
  likes: z.number(),
  new: z.boolean(),
  date: z.string(),
  id: z.string(),
  featured: z.optional(z.boolean()),
});

export const postsSchema = z.array(postSchema);
