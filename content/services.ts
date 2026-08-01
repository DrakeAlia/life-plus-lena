export type Tier = {
  n: string;
  t: string;
  p: string;
  l: string[];
};

export const TIERS: Tier[] = [
  { n: "One", t: "Design Consultation", p: "A single focused session, in your home or by video.",
    l: ["Two hours, room by room", "Paint, layout, and lighting direction", "Written recap to keep"] },
  { n: "Two", t: "Room Refresh", p: "One room, reworked with what you have and a few things you don't.",
    l: ["Floor plan and furniture layout", "Curated shopping list with links", "Styling day when it all arrives"] },
  { n: "Three", t: "Full-Home Design", p: "New builds and whole-house remodels, from first drawing to last pillow.",
    l: ["Concept, materials, and finishes", "Trade and builder coordination", "Install and reveal day"] },
];

export const THEIR_QUESTIONS = [
  "Where should the furniture go?",
  "What style do you like?",
  "What's your color palette?",
];

export const MY_QUESTIONS = [
  "How do you want this room to feel?",
  "How do you want to live here?",
  "What memories do you want to create?",
  "How do you gather, recharge, entertain, and connect?",
];

export const CLOSING = [
  "Only after those questions are answered do I begin designing.",
  "Furniture placement is never the starting point.",
  "It is the expression of a deeper intention.",
];
