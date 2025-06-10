import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z
    .string()
    // [username].domain.com
    .min(3, "Username must be at least 3 characters long")
    .max(63, "Username must be at most 63 characters long")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Username must be lowercase and contain only letters, numbers, and hyphens"
    )
    .refine(
      (value) => !value.includes("--"),
      "Username must not contain consecutive hyphens"
    )
    .transform((value) => value.toLowerCase()),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
