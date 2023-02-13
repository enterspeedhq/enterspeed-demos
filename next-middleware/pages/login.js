import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="bg-gray-200">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-4xl font-extrabold mb-4">Login</h1>
          <p className="my-4 text-lg">
            You need to login to view this article. Click the login button in
            the top right corner.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
