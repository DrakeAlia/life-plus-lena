"use client";

import { PLACE } from "@/content/rooms";
import Frame from "@/components/Frame";
import { motion, rise, stagger } from "@/components/Motion";

export default function PlaceSection() {
  return (
    <section className="lpl-pad lpl-sec">
      <motion.div {...rise} className="lpl-sec-head">
        <div className="lpl-eyebrow">Inspired by Scottsdale</div>
        <h2 className="lpl-h2" style={{ margin: "12px auto 16px" }}>Natural beauty. Elevated living.</h2>
        <p className="lpl-body" style={{ maxWidth: "58ch" }}>
          From the colors of the Sonoran Desert to the way we gather in the Southwest,
          Scottsdale offers endless inspiration for homes that feel connected to place.
        </p>
      </motion.div>
      <div className="lpl-grid3">
        {PLACE.map((p, i) => (
          <motion.div key={p.t} className="lpl-card" {...stagger(i)}>
            <Frame scene={p.s} style={{ aspectRatio: "3/2" }} />
            <h3>{p.t}</h3>
            <p>{p.c}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
