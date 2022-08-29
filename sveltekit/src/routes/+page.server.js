import { getByHandle } from "../lib/enterspeed";

export async function load() {
  const posts = getByHandle("blogList");

  return posts;
}
