"use client";

import { OUTCOMES } from "@/content/site";
import { motion, rise, stagger } from "@/components/Motion";

export default function SuccessSection() {
  return (
    <section className="lpl-pad lpl-sec" style={{ background: "var(--linen)" }}>
      <motion.div {...rise} className="lpl-sec-head" style={{ "--head-width": "30ch" } as React.CSSProperties}>
        <div className="lpl-eyebrow">What success looks like</div>
        <h2 className="lpl-h2" style={{ marginTop: 12 }}>
          Success isn't measured by compliments about a room.
        </h2>
        <p className="lpl-body" style={{ marginTop: 18, maxWidth: "58ch" }}>It is measured by comments like:</p>
      </motion.div>
      <div className="lpl-outcomes">
        {OUTCOMES.map((o, i) => (
          <motion.div className="lpl-outcome" key={o} {...stagger(i, 0.1)}>
            <q className="lpl-display">{o}</q>
          </motion.div>
        ))}
      </div>
      <motion.p className="lpl-display" {...rise}
        style={{ marginTop: 30, fontStyle: "italic", fontSize: "clamp(1.2rem,1.8vw,1.45rem)" }}>
        Those are the outcomes that matter.
      </motion.p>
    </section>
  );
}
