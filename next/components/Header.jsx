import Link from "next/link";

const Header = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
        <Link href="/">Enterspeed ♥ Next</Link>
      </div>
    </div>
  );
};

export default Header;
