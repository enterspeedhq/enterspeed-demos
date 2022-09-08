const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

export const meta = () => ({
  charset: "utf-8",
  title: "Enterspeed ♥ Remix",
  viewport: "width=device-width,initial-scale=1",
});

import styles from "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body>
        <Header />
        <Outlet />

        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
