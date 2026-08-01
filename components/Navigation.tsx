"use client";

import { Menu, X } from "lucide-react";
import { NAV } from "@/content/site";
import { motion } from "@/components/Motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");
const getNavHref = (nav: string) => (nav === "Home" ? "#top" : `#${slug(nav)}`);

export default function Navigation() {
  return (
    <nav className="lpl-nav" aria-label="Main">
      <motion.a href="#top" className="lpl-wordmark"
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <div className="sup">Life Plus</div>
        <div className="name">LENA</div>
      </motion.a>
      <motion.div className="lpl-links"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.35 }}>
        {NAV.map((n) => <a key={n} href={getNavHref(n)}>{n}</a>)}
      </motion.div>

      <Sheet>
        <SheetTrigger asChild>
          <button className="lpl-burger" aria-label="Open menu">
            <Menu size={22} strokeWidth={1.2} />
          </button>
        </SheetTrigger>
        <SheetContent side="top" className="lpl-drawer-sheet">
          {NAV.map((n) => (
            <a key={n} href={getNavHref(n)} className="lpl-drawer-link">{n}</a>
          ))}
        </SheetContent>
      </Sheet>
    </nav>
  );
}
