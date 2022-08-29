import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export async function getServerData(context) {
  const res = await fetch(
    `https://delivery.enterspeed.com/v1?url=/${context.params.slug}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
      },
    }
  );

  const data = await res.json();

  if (data.meta.status === 404) {
    return {
      status: 404,
    };
  }
  return {
    props: {
      post: data.route.content,
    },
  };
}

export default function Page({ serverData }) {
  const { post } = serverData;

  return (
    <>
      <Layout title={post.title} description={post.description}>
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
          <div className="block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800">
            <Link to="/">👈 Go back</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
