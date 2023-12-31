import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z
    .string()
    .nonempty()
    .min(3, { message: "Minimum 3 characters." })
    .max(500, { message: "Maximum 500 caracters." }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z
    .string()
    .nonempty()
    .min(3, { message: "Minimum 3 characters." })
    .max(300, { message: "Maximum 300 caracters." }),
});
