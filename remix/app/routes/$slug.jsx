import { useLoaderData, useParams, NavLink } from "@remix-run/react";
import Error404 from "~/components/404";

import { getByUrl } from "~/lib/enterspeed";

export async function loader({ params }) {
  const post = await getByUrl(`/${params.slug}`);

  if (post.status === 404) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return post;
}

export const meta = ({ data }) => {
  if (data) {
    return {
      title: data.content.title,
      description: data.content.excerpt,
    };
  }
};

export function CatchBoundary() {
  const params = useParams();
  return <Error404 slug={params.slug} />;
}

export default function PostSlug() {
  const post = useLoaderData().content;

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
      <div className="text-center">
        <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {post.title}
        </h1>
        <div>
          {post.author.name} - {post.date}
        </div>
      </div>
      <img
        src={post.featuredImage}
        alt={post.title}
        className="rounded shadow-lg my-8 mx-auto"
      />
      <article
        className="text-gray-700 text-lg blogpost"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <NavLink
        to="/"
        className="block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800"
      >
        👈 Go back
      </NavLink>
    </div>
  );
}
