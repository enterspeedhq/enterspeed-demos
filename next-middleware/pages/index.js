import { getRoutes } from "lib/enterspeed";

export async function getServerSideProps() {
  const routes = await getRoutes();

  return {
    props: {
      routes,
    },
  };
}

const Home = ({ routes }) => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-4xl font-extrabold mb-4">Navigate to a page</h1>
          <ul className="max-w-md space-y-1 list-disc list-inside ">
            {routes.results.map((route) => (
              <li key={route.url}>
                <a className="text-blue-600 hover:underline" href={route.url}>
                  {route.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
