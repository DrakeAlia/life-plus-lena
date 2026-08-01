import type { SceneKind } from "@/components/Scene";

export type Room = {
  t: string;
  c: string;
  s: SceneKind;
};

export type Ritual = [string, SceneKind];

export const ROOMS: Room[] = [
  { t: "Living Rooms", c: "Layered textures, natural light, and rooms that bring people together.", s: "living" },
  { t: "Kitchens", c: "Where function meets beauty and connection happens naturally.", s: "kitchen" },
  { t: "Primary Suites", c: "A personal retreat designed for rest, renewal, and quiet luxury.", s: "bedroom" },
  { t: "Outdoor Living", c: "Extend the house outdoors and enjoy the beauty of every season.", s: "patio" },
];

export const PLACE: Room[] = [
  { t: "Desert Hues", c: "Warm earth tones, soft neutrals, and organic textures drawn from the landscape.", s: "desert" },
  { t: "Indoor / Outdoor Living", c: "Designed for sunshine, fresh air, and long evenings spent outside.", s: "patio" },
  { t: "Natural Elements", c: "Stone, wood, light, and greenery bring tranquility into the home.", s: "cactus" },
];

export const RITUALS: Ritual[] = [
  ["Morning Rituals", "still"], ["Gathering Together", "gather"], ["Quiet Retreats", "portrait"],
  ["Everyday Beauty", "still"], ["Healthy Living", "cactus"], ["Welcome Others", "exterior"],
];
