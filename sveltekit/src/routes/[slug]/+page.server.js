import { error } from "@sveltejs/kit";
import { getByUrl } from "$lib/enterspeed";

export async function load({ url }) {
  const pathname = url.pathname;

  const post = await getByUrl(pathname);
  if (post.status === 404) {
    throw error(404, "Not found");
  }

  return post;
}
