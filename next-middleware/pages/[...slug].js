import useHydrated from "../hooks/useHydrated";
import Head from "next/head";
import Link from "next/link";
import { getRoutes } from "lib/enterspeed";

export async function getStaticPaths() {
  const routes = await getRoutes();

  return {
    paths: routes.results.map((route) => route.url),
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Page = ({ enterspeedContent, country }) => {
  const hydrated = useHydrated();
  if (hydrated) {
    return (
      <>
        <Head>
          <title>{enterspeedContent?.title}</title>
        </Head>
        <div className="bg-gray-200">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="text-4xl font-extrabold mb-4">
              {enterspeedContent?.title}
            </h1>
            <p className="my-4 text-lg">{enterspeedContent?.content}</p>
            {enterspeedContent?.price && (
              <>
                <p className="text-3xl font-bold text-green-900">
                  {enterspeedContent?.price}
                </p>
                {enterspeedContent.ppp && (
                  <p className="text-lg pt-4 italic">You are in {country}.</p>
                )}
              </>
            )}
            <div className="mt-8">
              <Link href="/">👈 Go back</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Page;
