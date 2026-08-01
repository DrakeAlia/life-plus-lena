"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/content/site";

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default function StickyBar() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 620);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`lpl-sticky ${stuck ? "is-on" : ""}`}>
      <a href="#top" className="mark">LIFE PLUS LENA</a>
      <nav>{NAV.slice(1).map((n) => <a key={n} href={`#${slug(n)}`}>{n}</a>)}</nav>
      <a href="#contact" className="lpl-btn lpl-btn-dark" style={{ marginTop: 0, minHeight: 42, padding: "0 22px" }}>
        Start a project
      </a>
    </div>
  );
}
