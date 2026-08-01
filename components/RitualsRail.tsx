"use client";

import { RITUALS } from "@/content/rooms";
import Frame from "@/components/Frame";
import { motion, stagger } from "@/components/Motion";

export default function RitualsRail() {
  return (
    <section className="lpl-pad" style={{ paddingBottom: "clamp(52px,5.6vw,96px)" }}>
      <div className="lpl-rail">
        {RITUALS.map(([label, scene], i) => (
          <motion.div key={label} className="lpl-rail-item" {...stagger(i, 0.07)}>
            <Frame scene={scene} />
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
