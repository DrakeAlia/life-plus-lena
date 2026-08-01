"use client";

import { PHILOSOPHY } from "@/content/philosophy";
import { motion, rise, stagger } from "@/components/Motion";

type PhilosophyLine = { t: string; v: string | string[] };

function Line({ item }: { item: PhilosophyLine }) {
  if (item.t === "questions") {
    return (
      <ul className="lpl-qlist">
        {(item.v as string[]).map((q) => <li key={q}>{q}</li>)}
      </ul>
    );
  }
  return <p className={item.t}>{item.v as string}</p>;
}

export default function PhilosophySection() {
  return (
    <>
      <section id="philosophy" className="lpl-pad lpl-sec" style={{ background: "var(--linen)" }}>
        <div className="lpl-man" style={{ marginTop: 0 }}>
          {PHILOSOPHY.slice(0, 3).map((s, i) => (
            <motion.div className="lpl-man-row" key={s.title} {...stagger(i, 0.08)}>
              <div className="lpl-man-key">
                <div className="rule" />
                <div className="lpl-man-title">{s.title}</div>
              </div>
              <div className="lpl-lines">
                {s.lines.map((item, j) => <Line item={item} key={j} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="lpl-statement lpl-pad lpl-sec">
        <motion.div className="in" {...rise}>
          <p>I don't design from the outside in.</p>
          <p className="accent">I design from the inside out.</p>
          <p className="foot">
            Every home should support the life unfolding within it. A beautiful room is not
            the goal — it is the result. The real objective is creating spaces that are
            welcoming, calming, restorative, joyful, and authentic to the people who live
            there. My work is less about decorating and more about designing human experience.
          </p>
        </motion.div>
      </section>

      <section className="lpl-pad lpl-sec" style={{ background: "var(--linen)" }}>
        <div className="lpl-man" style={{ marginTop: 0 }}>
          {PHILOSOPHY.slice(3).map((s, i) => (
            <motion.div className="lpl-man-row" key={s.title} {...stagger(i, 0.08)}>
              <div className="lpl-man-key">
                <div className="rule" />
                <div className="lpl-man-title">{s.title}</div>
              </div>
              <div className="lpl-lines">
                {s.lines.map((item, j) => <Line item={item} key={j} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
