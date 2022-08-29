import { useLoaderData } from "@remix-run/react";
import { getByHandle } from "~/lib/enterspeed";

export async function loader() {
  return await getByHandle("blogList");
}

export default function Posts() {
  const posts = useLoaderData().blogList.content;
  return (
    <div className="bg-gray-200">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {posts.map((post) => (
            <a
              href={post.url}
              key={post.url}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded border hover:text-blue-800 hover:bg-gray-50"
            >
              <img
                src={post.thumbnail}
                className="object-cover w-full h-64"
                alt={post.title}
              />
              <div className="p-5 ">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="transition-colors duration-200 text-blue-gray-900">
                    {post.author.name}
                  </span>
                  <span className="text-gray-600">— {post.date}</span>
                </p>
                <div className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200">
                  {post.title}
                </div>
                <p className="mb-2 text-gray-700">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
