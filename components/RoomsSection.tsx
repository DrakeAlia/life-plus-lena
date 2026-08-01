"use client";

import { ArrowRight } from "lucide-react";
import { ROOMS } from "@/content/rooms";
import Frame from "@/components/Frame";
import { motion, rise, stagger } from "@/components/Motion";

export default function RoomsSection() {
  return (
    <section className="lpl-pad lpl-sec">
      <motion.div {...rise} className="lpl-sec-head">
        <div className="lpl-eyebrow">Beautifully designed for how you live</div>
        <h2 className="lpl-h2" style={{ marginTop: 12 }}>Every room, considered.</h2>
      </motion.div>
      <div className="lpl-grid4">
        {ROOMS.map((r, i) => (
          <motion.div key={r.t} className="lpl-card" {...stagger(i)}>
            <Frame scene={r.s} />
            <h3>{r.t}</h3>
            <p>{r.c}</p>
            <a href="#portfolio" className="lpl-more">Explore <ArrowRight size={13} strokeWidth={1.2} /></a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
