"use server";

import { cookies } from "next/headers";

export async function addCookie(name: string, data: any) {
  cookies().set(name, data);
}

export async function getCookie(name: string) {
  const token = cookies().get(name);
  return token ? token?.value : "";
}

export async function deleteCookie(name: string) {
  cookies().delete(name);
}
