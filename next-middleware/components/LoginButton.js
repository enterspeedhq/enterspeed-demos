import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const loggedInCookie = cookies.find((cookie) =>
      cookie.startsWith("loggedIn=")
    );
    if (loggedInCookie) {
      const [, value] = loggedInCookie.split("=");
      setIsLoggedIn(value === "true");
    }
  }, []);

  const handleLogin = () => {
    document.cookie = "loggedIn=true;max-age=604800";
    setIsLoggedIn(true);
    router.push("/");
  };

  const handleLogout = () => {
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsLoggedIn(false);
    router.push("/");
  };

  return isLoggedIn ? (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogout}
    >
      Logout
    </button>
  ) : (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogin}
    >
      Login
    </button>
  );
};

export default LoginButton;
