import { headers as getHeaders, cookies as getCookies } from "next/headers";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { AUTH_COOKIE } from "./constant";
import { loginSchema, registerSchema } from "../schema/register";

export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx }) => {
    const headers = await getHeaders();
    return await ctx.payload.auth({ headers });
  }),
  register: baseProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      const existingUser = await ctx.payload.find({
        collection: "users",
        limit: 1,
        where: {
          username: {
            equals: input.username,
          },
        },
      });

      if (existingUser.docs.length > 0) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Username already exists",
        });
      }

      await ctx.payload.create({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
          username: input.username,
        },
      });

      const data = await ctx.payload.login({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
        },
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      const cookies = await getCookies();
      cookies.set({
        name: AUTH_COOKIE,
        value: data.token,
        httpOnly: true,
        path: "/",
        //TODO: Ensure cross-domain cookie sharing
      });

      return data;
    }),
  login: baseProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
    const data = await ctx.payload.login({
      collection: "users",
      data: {
        email: input.email,
        password: input.password,
      },
    });

    if (!data.token) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid credentials",
      });
    }

    const cookies = await getCookies();
    cookies.set({
      name: AUTH_COOKIE,
      value: data.token,
      httpOnly: true,
      path: "/",
      //TODO: Ensure cross-domain cookie sharing
    });

    return data;
  }),
  logout: baseProcedure.mutation(async () => {
    const cookies = await getCookies();
    cookies.delete(AUTH_COOKIE);
  }),
});
