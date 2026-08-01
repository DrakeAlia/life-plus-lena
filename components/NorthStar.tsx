"use client";

import { motion, rise } from "@/components/Motion";

export default function NorthStar() {
  return (
    <section className="lpl-pad lpl-sec" style={{ background: "var(--linen)" }}>
      <motion.div className="lpl-north" {...rise}>
        <div className="lpl-man-key">
          <div className="lpl-man-title">My North Star</div>
        </div>
        <div className="lines">
          <p>I don't design rooms.</p>
          <p>I design the experiences people have within them.</p>
          <p className="lpl-eyebrow" style={{ marginTop: 6 }}>And ultimately…</p>
          <p className="big">I help people create lives that feel as beautiful as they look.</p>
          <div className="lpl-signature">— Lena</div>
        </div>
      </motion.div>
    </section>
  );
}
