"use client";

import { ArrowRight } from "lucide-react";
import { ROOMS } from "@/content/rooms";
import Frame from "@/components/Frame";
import { motion, stagger } from "@/components/Motion";

export default function PortfolioBand() {
  return (
    <section id="portfolio" className="lpl-band">
      {ROOMS.map((r, i) => (
        <motion.div key={r.t} {...stagger(i, 0.12)}>
          <Frame scene={r.s}>
            <div className="lpl-band-copy">
              <h3>{r.t}</h3>
              <p>{r.c}</p>
              <a href="#portfolio" className="lpl-more" style={{ color: "var(--parchment)" }}>
                View projects <ArrowRight size={13} strokeWidth={1.2} />
              </a>
            </div>
          </Frame>
        </motion.div>
      ))}
    </section>
  );
}
