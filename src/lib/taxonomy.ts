/**
 * Shared, controlled tag vocabulary for the data-essay gallery. Both the
 * manifest generator (scripts/build-manifest.ts) and the gallery UI import
 * from here, so filter chips and inferred tags can never drift out of sync.
 *
 * Three independent tag dimensions:
 *   - subtopic: what the essay is about
 *   - scope:    geographic reach
 *   - source:   the survey family behind the data
 */

export type Subtopic =
  | "income"
  | "gender"
  | "race"
  | "religion"
  | "age"
  | "trust"
  | "community"
  | "politics"
  | "health"
  | "geography";

export type Scope = "US" | "Global" | "Europe";

export type Source =
  | "GSS"
  | "Gallup US Daily"
  | "Gallup World Poll"
  | "EVS–WVS"
  | "ESS";

export const SUBTOPICS: { key: Subtopic; label: string }[] = [
  { key: "income", label: "Income" },
  { key: "gender", label: "Gender" },
  { key: "race", label: "Race" },
  { key: "religion", label: "Religion" },
  { key: "age", label: "Age" },
  { key: "trust", label: "Trust" },
  { key: "community", label: "Community" },
  { key: "politics", label: "Politics" },
  { key: "health", label: "Health & Despair" },
  { key: "geography", label: "Geography" },
];

export const SCOPES: Scope[] = ["US", "Global", "Europe"];

export const SOURCES: Source[] = [
  "GSS",
  "Gallup US Daily",
  "Gallup World Poll",
  "EVS–WVS",
  "ESS",
];

/** Deterministic accent color per subtopic — used for chips and the gradient
 *  fallback behind the generated sparkmark thumbnail. Drawn from the site's
 *  academic palette (navy / maroon / gold / slate). */
export const SUBTOPIC_COLOR: Record<Subtopic, string> = {
  income: "#2f7d6b",
  gender: "#9b2335",
  race: "#5b3a82",
  religion: "#b07c2e",
  age: "#16233f",
  trust: "#3f7d9e",
  community: "#0f6b62",
  politics: "#b8431a",
  health: "#7a3b2e",
  geography: "#4a7a4a",
};

export const SUBTOPIC_LABEL: Record<Subtopic, string> = Object.fromEntries(
  SUBTOPICS.map((s) => [s.key, s.label])
) as Record<Subtopic, string>;

export interface Tags {
  subtopics: Subtopic[];
  scope: Scope[];
  sources: Source[];
}

const SUBTOPIC_PATTERNS: { key: Subtopic; re: RegExp }[] = [
  { key: "income", re: /\b(income|money|rich|wealth|gni|gdp|financ|poverty|poor|\bpay\b|earn|dollar|treadmill|satisfaction with finance|\$)\b/i },
  { key: "gender", re: /\b(gender|wom[ae]n|m[ae]n|female|male|\bsex\b|paradox)\b/i },
  { key: "race", re: /\b(race|racial|black|white|hispanic|latino|ethnic|lgbt)\b/i },
  { key: "religion", re: /\b(relig|faith|church|worship|pray|prayer|normative|\bgod\b|spiritual|pew|attendance)\b/i },
  { key: "age", re: /\b(age|aged|ageing|aging|young|old|elder|generation|cohort|u-curve|midlife|life-?stage)\b/i },
  { key: "trust", re: /\b(trust|distrust|confidence|count on)\b/i },
  { key: "community", re: /\b(communit|social capital|connection|neighbo|isolat|evening|generosity|civic|lonel|friend|belong|alone|family|marriage|marri)\b/i },
  { key: "politics", re: /\b(politic|vote|voting|election|flip|trump|obama|partisan|\bred\b|\bblue\b|ballot|democrat|republican|left|right|ideolog|optimism gap)\b/i },
  { key: "health", re: /\b(despair|death|mortalit|suicide|depress|mental|\bpain\b|anxiet|\bsad\b|stress|worry|health|calm|mood|meaning|distress)\b/i },
  { key: "geography", re: /\b(geograph|county|counties|\bmap\b|\bstate\b|states|region|place|thriv|spatial|where|continent|borders|convergence)\b/i },
];

/** Infer tags from an essay's title, description, and dataset label.
 *  Conservative: the survey-family source it can prove from the dataset string
 *  drives scope, with a text fallback. Returns at least one subtopic. */
export function inferTags(input: {
  title?: string | null;
  description?: string | null;
  dataset?: string | null;
}): Tags {
  const text = [input.title, input.description].filter(Boolean).join(" ");
  const ds = (input.dataset ?? "").toLowerCase();

  const subtopics = SUBTOPIC_PATTERNS.filter((p) => p.re.test(text)).map(
    (p) => p.key
  );

  const sources: Source[] = [];
  const scope = new Set<Scope>();
  if (/general social survey|\bgss\b/.test(ds)) {
    sources.push("GSS");
    scope.add("US");
  }
  if (/gallup us daily|us daily|motherlode|gallup u\.?s/.test(ds)) {
    sources.push("Gallup US Daily");
    scope.add("US");
  }
  if (/gallup world poll|world poll/.test(ds)) {
    sources.push("Gallup World Poll");
    scope.add("Global");
  }
  if (/european social survey|\bess\b/.test(ds)) {
    sources.push("ESS");
    scope.add("Europe");
  }
  if (/european values study/.test(ds)) {
    sources.push("EVS–WVS");
    scope.add("Europe");
  }
  if (/integrated evs|evs[–-]wvs|\bevs\b|\bwvs\b|world values|values surv/.test(ds)) {
    if (!sources.includes("EVS–WVS")) sources.push("EVS–WVS");
    // Integrated / world values surveys are global in reach.
    if (!/european values study/.test(ds)) scope.add("Global");
  }

  // Scope fallbacks from text when the dataset string is unhelpful.
  if (scope.size === 0) {
    if (/\b(europe|european)\b/i.test(text)) scope.add("Europe");
    else if (/\b(countr(y|ies)|world|global|nation)\b/i.test(text)) scope.add("Global");
    else scope.add("US");
  }

  return {
    subtopics: subtopics.length ? subtopics : ["health"],
    scope: [...scope],
    sources,
  };
}
