import type { ArsenalItem, LadderStep } from "./types";

export const DEFAULT_SETTINGS = {
  name: "Siebe",
  weeklyApproachGoal: 7,
  seasonPeakMonths: [6, 7, 8],
};

export const PLACE_CHIPS = ["Brugge", "Blankenberge", "Knokke", "Beach"];

/** What to convey — not a script */
export const APPROACH_INTENT = [
  "You noticed her. That's the whole reason. Say that, in your own words.",
  "Man to woman. She should feel why you walked over — not hear a pickup line.",
  "Excuse me → pause → smile → eye contact. Then speak.",
  "Low stakes is fine: hi, short chat, leave calm. The rep is the win.",
  "Relaxed beats clever. What you feel, she feels.",
];

export const PUSH_LINES = [
  {
    headline: "Stop preparing. Start walking.",
    body: "Two months of podcasts. You know enough. The gap isn't knowledge — it's reps. One approach today beats another hour of theory.",
  },
  {
    headline: "You're rejecting yourself for her.",
    body: "She can't say no if you never show up. Every time you don't walk over, you did her job. Walk over as yourself. Let her decide.",
  },
  {
    headline: "Afraid is not the same as unable.",
    body: "Your heart racing means you're alive, not broken. Doing it while scared is the whole skill. Fearless is a myth.",
  },
  {
    headline: "A year locked in ends when you open the door.",
    body: "Business won't hug you back. You fixed porn — good. Now replace that hunger with a real person. Connection isn't a reward for success. It's part of being human.",
  },
  {
    headline: "Not enough results = not enough action.",
    body: "No mystery. No special technique missing. Volume. Go out. Talk. Log. Repeat.",
  },
  {
    headline: "Summer doesn't wait.",
    body: "People are at the coast now. In six months it's empty again. This window is short. Use it.",
  },
  {
    headline: "Your coach can't approach for you.",
    body: "Call him after — not instead. One set on a Tuesday beats three calls about why you didn't go out.",
  },
  {
    headline: "Low stakes is not weakness.",
    body: "Ask a guy the time. Then a pretty girl. Then say hi and leave. You're training your nervous system, not auditioning for her.",
  },
];

export const PUSH_CLOSER =
  "Close this app. Walk outside. Three seconds. No thinking.";

export const DEFAULT_LADDER: LadderStep[] = [
  {
    id: "l1",
    level: 1,
    title: "Eye contact + smile ×3",
    who: "Anyone",
    description: "",
  },
  {
    id: "l2",
    level: 2,
    title: "Say hey ×3",
    who: "Anyone",
    description: "",
  },
  {
    id: "l3",
    level: 3,
    title: "Ask the time",
    who: "Guy or cashier",
    description: "",
  },
  {
    id: "l4",
    level: 4,
    title: "Ask the time",
    who: "Pretty girl",
    description: "",
  },
  {
    id: "l5",
    level: 5,
    title: "2-min chat",
    who: "Anyone or pretty girl",
    description: "",
  },
  {
    id: "l6",
    level: 6,
    title: "Say hi + leave",
    who: "Pretty girl",
    description: "",
  },
  {
    id: "l7",
    level: 7,
    title: "Say hi ×3",
    who: "Pretty girls",
    description: "",
  },
  {
    id: "l8",
    level: 8,
    title: "Direct approach",
    who: "Pretty girl",
    description: "",
  },
  {
    id: "l9",
    level: 9,
    title: "Get number",
    who: "Pretty girl",
    description: "",
  },
];

export const DEFAULT_ARSENAL: ArsenalItem[] = [];
