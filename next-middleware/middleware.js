import { NextResponse } from "next/server";
import { MiddlewareRequest } from "@netlify/next";
import { getByUrl } from "./lib/enterspeed";

export async function middleware(nextRequest) {
  const pathname = nextRequest.nextUrl.pathname;
  const middlewareRequest = new MiddlewareRequest(nextRequest);
  const response = await middlewareRequest.next();

  const { geo, cookies } = nextRequest;

  const loggedIn = cookies.has("loggedIn");

  const country = geo.country;

  if (
    pathname.match(
      /^\/api|assets|^\/$|.svg|.png|.jpg|static|_next|.netlify|login|favicon.ico.*/
    )
  ) {
    return response;
  }

  const enterspeedContent = await getByUrl(pathname);
  if (enterspeedContent.status === 301) {
    return NextResponse.redirect(
      new URL(enterspeedUrl.redirect, nextRequest.url)
    );
  }

  if (enterspeedContent.status === 404) {
    return new NextResponse(JSON.stringify({ message: "Page not found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }
  if (!loggedIn) {
    if (enterspeedContent.premium) {
      return NextResponse.redirect(new URL("/login", nextRequest.url));
    }

    if (enterspeedContent.price && !enterspeedContent.ppp) {
      enterspeedContent.price = "Contact us for price";
    }
  }

  if (enterspeedContent.ppp) {
    enterspeedContent.price =
      enterspeedContent.price[country] ?? enterspeedContent.price["US"];
  }

  response.setPageProp("enterspeedContent", enterspeedContent);
  response.setPageProp("country", country);

  return response;
}
