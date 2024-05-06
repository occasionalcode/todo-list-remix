import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/server-runtime";
import stylesheet from "@/tailwind.css?url";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";
import Selection from "./Selection";
import TodosContextProvider from "./useContext/to-do-context";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <TodosContextProvider>
          <Navbar />
          <Selection />
          {children}
          <ScrollRestoration />
          <Scripts />
          <Toaster />
        </TodosContextProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
