export type PhilosophyLine =
  | { t: "line"; v: string }
  | { t: "prose"; v: string }
  | { t: "key"; v: string }
  | { t: "questions"; v: string[] };

export type PhilosophySection = {
  title: string;
  lines: PhilosophyLine[];
};

export const PHILOSOPHY: PhilosophySection[] = [
  {
    title: "Why I Do This",
    lines: [
      { t: "line", v: "For years I believed I was in the business of designing homes." },
      { t: "line", v: "I wasn't." },
      { t: "line", v: "I was helping people create better lives through the places they call home." },
      { t: "prose", v: "Like many entrepreneurs, my path evolved. Opportunities in home staging and interior design allowed me to build a successful business and develop valuable experience. Yet beneath every project was the same question that first inspired me to create Life Plus Lena in the first place:" },
      { t: "key", v: "How can a home help someone live more beautifully?" },
      { t: "line", v: "Today, I realize that question has always been at the heart of my work." },
      { t: "line", v: "Design was never the destination." },
      { t: "line", v: "It was the doorway." },
    ],
  },
  {
    title: "What I Believe",
    lines: [
      { t: "line", v: "I believe our surroundings shape our lives more than we realize." },
      { t: "line", v: "The rooms we wake up in influence our mornings." },
      { t: "line", v: "The kitchens where we gather shape our relationships." },
      { t: "prose", v: "The lighting, colors, textures, and flow of a home quietly influence how we feel every single day." },
      { t: "line", v: "A well-designed home doesn't simply look beautiful." },
      { t: "line", v: "It restores us." },
      { t: "line", v: "It welcomes us." },
      { t: "line", v: "It supports us." },
      { t: "line", v: "It becomes part of the life we are creating." },
    ],
  },
  {
    title: "My Philosophy",
    lines: [
      { t: "line", v: "Before I think about furniture, fabrics, or finishes, I want to understand:" },
      { t: "questions", v: [
        "How do you want your life to feel?",
        "What season of life are you in?",
        "Where do you find peace?",
        "How do you gather with family and friends?",
        "What memories do you hope to create here?",
      ] },
      { t: "line", v: "Only after understanding those answers do I begin designing." },
      { t: "prose", v: "Because beautiful homes are created from meaningful lives — not the other way around." },
    ],
  },
  {
    title: "AI Is a Tool, Not the Business",
    lines: [
      { t: "line", v: "I don't want to become \"an AI company.\"" },
      { t: "prose", v: "AI simply allows me to do what I've always done — more efficiently, more creatively, and for more people." },
      { t: "line", v: "AI can generate beautiful rooms." },
      { t: "line", v: "It cannot understand how someone wants to live." },
      { t: "prose", v: "It cannot recognize the emotional needs of a family or interpret what makes a home feel welcoming." },
      { t: "line", v: "That remains the human element." },
      { t: "line", v: "My role is not replaced by AI." },
      { t: "key", v: "It is amplified by AI." },
    ],
  },
  {
    title: "The Future",
    lines: [
      { t: "line", v: "I don't want to build another design business." },
      { t: "line", v: "I want to build a company that helps people intentionally design the way they live." },
      { t: "line", v: "Homes will always be part of that story." },
      { t: "line", v: "But they are only one chapter." },
      { t: "prose", v: "Life Plus Lena exists to help people create lives that feel intentional, welcoming, healthy, beautiful, and deeply personal." },
      { t: "line", v: "Because our homes are not simply where we live." },
      { t: "key", v: "They shape how we live." },
    ],
  },
  {
    title: "My Promise",
    lines: [
      { t: "line", v: "I will never begin with furniture." },
      { t: "line", v: "I will begin with you." },
      { t: "line", v: "I will listen before I design." },
      { t: "line", v: "I will seek to understand before I recommend." },
      { t: "prose", v: "I will create environments that support your life — not simply decorate your rooms." },
      { t: "line", v: "Because every home tells a story." },
      { t: "key", v: "My privilege is helping it tell yours." },
    ],
  },
];
