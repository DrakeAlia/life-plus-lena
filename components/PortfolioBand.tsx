"use client";

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
            </div>
          </Frame>
        </motion.div>
      ))}
    </section>
  );
}
