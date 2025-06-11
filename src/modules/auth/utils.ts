import { cookies as getCookies } from "next/headers";

type Props = {
  prefix: string;
  value: string;
};

export const generateAuthCookie = async ({ prefix, value }: Props) => {
  const cookies = await getCookies();
  cookies.set({
    name: `${prefix}-token`,
    value: value,
    httpOnly: true,
    path: "/",
  });
};
