"use client";

import { Check } from "lucide-react";
import { TIERS, THEIR_QUESTIONS, MY_QUESTIONS, CLOSING } from "@/content/services";
import { motion, rise, fade, stagger } from "@/components/Motion";

export default function ServicesSection() {
  return (
    <section id="services" className="lpl-pad lpl-sec">
      <motion.div {...rise} style={{ textAlign: "center" }}>
        <div className="lpl-eyebrow">Services</div>
        <h2 className="lpl-h2" style={{ marginTop: 12, maxWidth: "26ch", marginLeft: "auto", marginRight: "auto" }}>
          What makes Life Plus Lena different
        </h2>
        <p className="lpl-body" style={{ marginTop: 22, maxWidth: "58ch", fontSize: "1.05rem", marginLeft: "auto", marginRight: "auto" }}>
          Most designers begin with the room.<br />
          <span style={{ color: "var(--espresso)" }}>I begin with the people.</span>
        </p>
      </motion.div>

      <motion.div className="lpl-ask" {...fade}>
        <div className="lpl-ask-col">
          <div className="who">Most designers ask</div>
          <ul>{THEIR_QUESTIONS.map((q) => <li key={q}>{q}</li>)}</ul>
        </div>
        <div className="lpl-ask-col mine">
          <div className="who">I ask</div>
          <ul>{MY_QUESTIONS.map((q) => <li key={q}>{q}</li>)}</ul>
        </div>
      </motion.div>

      <div className="lpl-close">
        {CLOSING.map((line, i) => (
          <motion.p key={line} className="lpl-display" {...stagger(i, 0.12)}
            style={{ fontStyle: "italic", fontSize: "clamp(1.15rem,1.7vw,1.4rem)", lineHeight: 1.45 }}>
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div {...rise} style={{ marginTop: "clamp(48px,5vw,80px)" }}>
        <div className="lpl-eyebrow">How we work together</div>
        <h2 className="lpl-h2" style={{ marginTop: 12 }}>Three ways to begin.</h2>
      </motion.div>
      <div className="lpl-tiers">
        {TIERS.map((t, i) => (
          <motion.div key={t.t} className="lpl-tier" {...stagger(i, 0.12)}>
            <div className="n">{t.n}</div>
            <h3>{t.t}</h3>
            <p>{t.p}</p>
            <ul>{t.l.map((li) => <li key={li}><Check size={13} strokeWidth={1.4} />{li}</li>)}</ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
