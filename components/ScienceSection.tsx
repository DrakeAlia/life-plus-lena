"use client";

import { SCIENCE } from "@/content/science";
import { motion, rise, stagger } from "@/components/Motion";

export default function ScienceSection() {
  return (
    <section id="why-it-matters" className="lpl-pad lpl-sec">
      <motion.div {...rise} style={{ textAlign: "center" }}>
        <div className="lpl-eyebrow">The Science Behind Beautiful Living</div>
        <h2 className="lpl-h2" style={{ marginTop: 14, maxWidth: "22ch", marginLeft: "auto", marginRight: "auto" }}>
          Why does this matter?
        </h2>
      </motion.div>
      <div className="lpl-sci">
        {SCIENCE.map((s, i) => (
          <motion.div className="lpl-sci-row" key={s.t} {...stagger(i, 0.08)}>
            <h3>{s.t}</h3>
            <p>{s.c}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
