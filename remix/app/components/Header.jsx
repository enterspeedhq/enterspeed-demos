import { NavLink } from "@remix-run/react";

const Header = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <NavLink
        to="/"
        className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
      >
        Enterspeed ♥ Remix
      </NavLink>
    </div>
  );
};

export default Header;
