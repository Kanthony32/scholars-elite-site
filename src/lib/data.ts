export interface Team {
  id: string;
  name: string;
  age: string;
  track: "Academy" | "Select" | "National";
  slug: string;
  purpose: string;
  devFocus: string[];
  competition: string;
  recruiting: string;
}

export interface EventItem {
  name: string;
  icon: string;
  date: string;
  loc: string;
  status: string;
  purpose: string;
  tags: string[];
}

export interface Tier {
  level: string;
  amt: string;
  color: string;
}

export const TEAMS: Team[] = [
  { id: "middle-school", name: "Middle School", age: "Grades 6–8", track: "Academy", slug: "MS", purpose: "Foundation stage. Teaching athletes how to train, compete, and learn.", devFocus: ["Fundamental skill acquisition", "Decision-making & spacing", "Confidence through correct reps", "Intro to accountability"], competition: "Regional. Controlled environments emphasizing learning.", recruiting: "None. Skill & habits first." },
  { id: "15u", name: "15U", age: "15U", track: "Select", slug: "15U", purpose: "Transition from foundational development to performance training.", devFocus: ["Skill progression under pressure", "Game pace & decision-making", "Strength foundations", "Film intro & self-evaluation"], competition: "Regional + selective travel. Meaningful minutes.", recruiting: "Early awareness. Educating families on timelines." },
  { id: "16u", name: "16U", age: "16U", track: "Select", slug: "16U", purpose: "Where development meets visibility. Execution against high-level competition.", devFocus: ["Advanced position packages", "Playing through physicality", "Film breakdown loops", "Mental discipline"], competition: "Regional + national. Strategic event selection.", recruiting: "Active prep. Timelines, film, communication, fit." },
  { id: "17u", name: "17U", age: "17U", track: "Select", slug: "17U", purpose: "Execution stage. Perform, lead, present as next-level contributor.", devFocus: ["Role clarity & efficiency", "Advanced reads", "Leadership & communication", "College environment prep"], competition: "Select national exposure. Recruiting window alignment.", recruiting: "Active. Profile refinement, opportunity evaluation." },
  { id: "academy", name: "Academy", age: "Various", track: "Academy", slug: "DEV", purpose: "Structured development before competitive exposure. The correct path.", devFocus: ["Technical rebuilding", "Strength & movement", "Game understanding", "Accountability habits"], competition: "Developmentally appropriate. Controlled environments.", recruiting: "Preparation only. Move to Select when ready." },
  { id: "hs-select", name: "HS Select", age: "HS", track: "National", slug: "NAT", purpose: "Highest competitive level. Roster spots earned.", devFocus: ["Performance consistency", "Advanced scouting & film", "Efficiency & leadership", "Professional habits"], competition: "National-level events. High-level matchups.", recruiting: "Active & individualized. Final-stage decisions." },
];

export const EVENTS: EventItem[] = [
  { name: "Turnpike Classic", icon: "🛣️", date: "Memorial Day Weekend", loc: "South Jersey", status: "ANNUAL", purpose: "Premier girls basketball tournament.", tags: ["Competition", "Pro Ops"] },
  { name: "Shooting Camp", icon: "🎯", date: "June", loc: "NJ", status: "REG OPEN", purpose: "Shooting mechanics, shot creation, efficiency.", tags: ["Footwork", "Game-Speed"] },
  { name: "Position Camp", icon: "🧠", date: "July", loc: "NJ", status: "COMING", purpose: "Position-specific role clarity and decision-making.", tags: ["Guards", "Wings", "Posts"] },
  { name: "NJ Scholars Day", icon: "🏀", date: "July TBD", loc: "NJ", status: "PLANNING", purpose: "Program-wide alignment day.", tags: ["Education", "Showcases"] },
  { name: "MS Dev Festival", icon: "🧩", date: "Sept 2026", loc: "NJ", status: "CONFIRMED", purpose: "Development festival grades 6–8.", tags: ["Skill Reps", "Learning"] },
  { name: "HS Event", icon: "🏆", date: "2027 TBA", loc: "TBD", status: "PLANNING", purpose: "High school event in development.", tags: ["Evaluation", "Structure"] },
];

export const TIERS: Tier[] = [
  { level: "Operator Partner", amt: "$25K+", color: "#EC407A" },
  { level: "Program Sponsor", amt: "$10K", color: "#9C27B0" },
  { level: "Team Sponsor", amt: "$5K", color: "#6A1B9A" },
  { level: "Community", amt: "$2.5K", color: "rgba(255,255,255,0.3)" },
  { level: "Supporter", amt: "$1K", color: "rgba(255,255,255,0.2)" },
];

export const STATS = [
  { v: "25+", l: "Years Experience" },
  { v: "6", l: "Teams" },
  { v: "100%", l: "Development First" },
  { v: "NJ", l: "Based" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Recruiting", href: "/recruiting" },
  { label: "Events", href: "/events" },
  { label: "NIL", href: "/nil" },
  { label: "Support", href: "/support" },
];

export const FAQS = [
  { q: "How is playing time determined?", a: "Earned through practice performance, effort, and coachability. Not guaranteed." },
  { q: "How do coaches communicate?", a: "Direct and honest. 24-hour rule on post-game discussions." },
  { q: "Will my daughter get a scholarship?", a: "We don't make promises. We develop, create film, and guide families." },
  { q: "Academy vs Select?", a: "Academy builds foundation. Select raises competition. Evaluation-based placement." },
  { q: "Time commitment?", a: "2–3 practices/week plus weekend events in season." },
];
