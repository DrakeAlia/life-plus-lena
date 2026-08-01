"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import { motion } from "@/components/Motion";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <header className="lpl-hero lpl-pad">
        <motion.div className="lpl-hero-art" aria-hidden="true"
          initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}>
          <Image
            src="/images/hero-lena.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACQAQCdASoKAAYAAUAmJaQAA3AA/v3xgAAA"
            className="lpl-hero-img"
          />
        </motion.div>

        <Navigation />

        <div className="lpl-hero-copy">
          <motion.h1 className="lpl-display"
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            Designing homes around the life you want to live.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}>
            I don't begin with furniture. I begin with you.
          </motion.p>
          <motion.a href="#philosophy" className={buttonVariants({ variant: "linen" })}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}>
            Learn my philosophy
          </motion.a>
        </div>
      </header>

      <section className="lpl-hero-side lpl-pad lpl-sec">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="lpl-eyebrow">The Life Plus Lena Philosophy</div>
          <h2 className="lpl-h2" style={{ marginTop: 16, maxWidth: "22ch", marginLeft: "auto", marginRight: "auto" }}>
            Designing Life from the Inside Out
          </h2>
          <p className="lpl-display" style={{
            fontStyle: "italic", fontSize: "clamp(1.3rem,2vw,1.65rem)",
            marginTop: 26, color: "var(--umber)", maxWidth: "30ch", lineHeight: 1.3, marginLeft: "auto", marginRight: "auto",
          }}>
            "A home is more than a place. It is where life unfolds."
          </p>
          <div style={{ width: 46, height: 1, background: "var(--clay)", margin: "30px auto" }} />
          <p className="lpl-body" style={{ maxWidth: "60ch", margin: "0 auto" }}>
            I believe the environments we create shape the lives we live. My work is less
            about decorating and more about designing human experience.
          </p>
        </motion.div>
      </section>
    </>
  );
}
