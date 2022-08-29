import Link from "next/link";
import { getByUrl } from "lib/enterspeed";
import Head from "next/head";

export async function getServerSideProps({ params, res }) {
  const data = await getByUrl(encodeURIComponent(`/${params.slug.join("/")}/`));

  const status = data.status;

  if (status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data.content,
    },
  };
}

export default function PostSlug({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
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
          <Link href="/">👈 Go back</Link>
        </div>
      </div>
    </>
  );
}
