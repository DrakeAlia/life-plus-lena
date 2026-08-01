"use client";

import { useState, useEffect, useRef, CSSProperties, ReactNode } from "react";

const EASE = "cubic-bezier(.22,.68,.24,1)";
const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function toStyle(v: any) {
  if (!v) return {};
  const { opacity, y = 0, x = 0, scale = 1 } = v;
  const t = [];
  if (y) t.push(`translateY(${y}px)`);
  if (x) t.push(`translateX(${x}px)`);
  if (scale !== 1) t.push(`scale(${scale})`);
  return { opacity, transform: t.length ? t.join(" ") : undefined };
}

type MotionProps = {
  initial?: any;
  animate?: any;
  whileInView?: any;
  whileHover?: any;
  transition?: { duration?: number; delay?: number };
  viewport?: { once?: boolean; amount?: number };
  style?: CSSProperties;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  children?: ReactNode;
  [key: string]: any;
};

function makeMotion(Tag: any) {
  return function Motion({
    initial, animate, whileInView, whileHover, transition = {}, viewport = {},
    style, onMouseEnter, onMouseLeave, children, ...rest
  }: MotionProps) {
    const ref = useRef(null);
    const [on, setOn] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => {
      if (reduced()) return setOn(true);
      if (whileInView) {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
          ([e]) => e.isIntersecting && (setOn(true), io.disconnect()),
          { threshold: viewport.amount ?? 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
      }
      const raf = requestAnimationFrame(() => setOn(true));
      return () => cancelAnimationFrame(raf);
    }, [whileInView, viewport.amount]);

    const { duration = 0.75, delay = 0 } = transition;
    const target = hover && whileHover ? whileHover : on ? (whileInView || animate) : initial;
    const move = `${duration}s ${EASE} ${delay}s`;

    return (
      <Tag
        ref={ref}
        onMouseEnter={(e: any) => { setHover(true); onMouseEnter?.(e); }}
        onMouseLeave={(e: any) => { setHover(false); onMouseLeave?.(e); }}
        style={{
          transition: reduced() ? "none" : `opacity ${move}, transform ${move}`,
          ...toStyle(target),
          ...style,
        }}
        {...rest}
      >
        {children}
      </Tag>
    );
  };
}

export const motion = {
  div: makeMotion("div"), section: makeMotion("section"), header: makeMotion("header"),
  h1: makeMotion("h1"), h2: makeMotion("h2"), h3: makeMotion("h3"), p: makeMotion("p"),
  a: makeMotion("a"), li: makeMotion("li"), figure: makeMotion("figure"),
  nav: makeMotion("nav"), blockquote: makeMotion("blockquote"),
};

export const rise = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };
export const fade = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true } };
export const stagger = (i: number, step = 0.09) => ({ ...rise, transition: { duration: 0.75, delay: i * step } });
