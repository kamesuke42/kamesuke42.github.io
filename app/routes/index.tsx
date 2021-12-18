import type { MetaFunction, LinksFunction } from "remix";
import { useEffect } from "react";

import rootStyle from "~/styles/root.css";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "kamesuke42",
    description: "kamesuke42's website"
  };
};

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: rootStyle },
  ];
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <h1>kamesuke42</h1>
        <div className="links">
          <a href="https://github.com/kamesuke42" target="_blank">GitHub</a>
        </div>
        <div className="badges">
          <img src={"http://www.hackthebox.eu/badge/image/331783"} alt="HackTheBox" />
        </div>
      </main>
    </div>
  );
}
