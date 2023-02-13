import Link from "next/link";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <div className="px-4 py-5 mx-auto flex flex-col justify-between sm:max-w-xl md:max-w-full md:flex-row lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="mb-2 text-xl font-bold tracking-wide text-gray-800 uppercase md:mb-0 md:ml-2">
        <Link href="/">Enterspeed ♥ Next Middleware</Link>
      </div>
      <LoginButton />
    </div>
  );
};

export default Header;
