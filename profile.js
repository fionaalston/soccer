/* ============================================================
   FIONA ALSTON — SOCCER PROFILE CONTENT
   ------------------------------------------------------------
   This is the ONLY file you edit to update the site.
   Everything here is content. Nothing here controls the design.

   To update: tell Claude what changed and ask it to edit this
   file, then commit. The site updates in about a minute.

   Keep quotes and commas as they are. Add an item by copying
   the line above it and editing. Empty fields simply hide.
   ============================================================ */

const PROFILE = {

  /* ---------- IDENTITY ---------- */
  firstName: "Fiona",
  lastName:  "Alston",
  number:    "17",
  eyebrow:   "Left-footed forward",
  club:      "De Anza Force 10G ECNL",
  role:      "Forward #17",
  classYear: "Class of 2028",

  /* Shows in the hero when filled. Leave "" until it happens. */
  commitment: "",

  /* One line that makes the case. Set in italic serif under the name. */
  positioning: "Left-footed forward who plays wide on either flank, with four US Soccer Talent ID call-ups and a NorCal PDP state selection since 2025.",

  /* Hero portrait. A background-free cut-out (transparent PNG/WebP) reads
     best — she stands on the hero baseline against the green. Drop the file
     next to index.html, or paste any image URL. */
  heroPhoto: "fiona-hero.webp",

  /* ---------- BADGES ----------
     Add logo files next to index.html and reference them below.
     Any badge without an image falls back to its text label. */
  badges: [
    { label: "De Anza Force", image: "" },
    { label: "ECNL",          image: "" },
    { label: "NorCal PDP",    image: "" },
  ],

  /* ---------- QUICK READ (band under hero) ---------- */
  keyFacts: [
    { label: "Grad year", value: "2028" },
    { label: "Position",  value: "Forward" },
    { label: "Foot",      value: "Left" },
    { label: "Club",      value: "De Anza Force 10G ECNL" },
    { label: "Height",    value: "5'3\"" },
  ],

  /* ---------- HIGHLIGHTS ----------
     Add a new reel by copying a block. videoId is the part of a
     YouTube URL after "v=". The first video plays inline; the
     rest show as cards. */
  videos: [
    { videoId: "", title: "2026 ECNL North Carolina Highlights", caption: "De Anza Force 10G ECNL" },
    { videoId: "", title: "2026 Spring Soccer Highlights",       caption: "De Anza Force 10G ECNL" },
  ],
  channelPlaylist: "UUgXVdyow3k-qL3DlXNdd74A",
  channelUrl: "https://www.youtube.com/@fiona-alston-soccer",

  /* ---------- PERSONAL INFO ---------- */
  personal: [
    { label: "Date of birth", value: "May 2010" },
    { label: "Height",        value: "5'3\"" },
    { label: "Weight",        value: "122 lbs" },
    { label: "Hometown",      value: "San Mateo, California" },
    { label: "NCAA ID",       value: "" },   /* Add once registered with the Eligibility Center */
  ],

  /* Second photo, beside the personal info card. */
  personalPhoto: "fiona-action.jpg",

  /* ---------- CONTACT ---------- */
  contact: {
    email:       "fionaalston2028@gmail.com",
    phone:       "628-278-1047",
    parentName:  "Nicole Alston",
    parentEmail: "nicolealston@gmail.com",
  },

  /* ---------- ACADEMICS ---------- */
  academics: {
    school:     "Crystal Springs Uplands School",
    address:    "400 Uplands Dr, Hillsborough, CA",
    classYear:  "Class of 2028 (Junior)",
    gpa:        "4.0 unweighted",
    courses: [
      "Honors Math III Advanced",
      "Honors Mandarin IV",
      "Computer Science II",
      "Chemistry",
    ],
    /* Upload transcript PDFs next to index.html and link them. */
    transcripts: [
      /* { label: "Grade 9 Transcript",  url: "grade-9-transcript.pdf" }, */
      /* { label: "Grade 10 Transcript", url: "grade-10-transcript.pdf" }, */
    ],
  },

  /* ---------- SOCCER ----------
     Grouped by pathway, newest first inside each group. */
  soccer: [
    {
      group: "Club Team",
      items: [
        { year: "",        text: "De Anza Force 10G ECNL" },
        { year: "",        text: "Primary: Forward, left or right wing" },
        { year: "",        text: "Secondary: Left back" },
      ],
    },
    {
      group: "US Soccer",
      items: [
        { year: "2026", text: "Talent ID Center — April" },
        { year: "2026", text: "Talent ID Center — January" },
        { year: "2025", text: "Talent ID Center — October" },
        { year: "2025", text: "Talent ID Center — September" },
      ],
    },
    {
      group: "NorCal Premier PDP",
      items: [
        { year: "2026", text: "U16 State Selection — Oshima Cup, Hakodate, Japan" },
      ],
    },
    {
      group: "High School",
      items: [
        { year: "2025",    text: "WBAL Foothill Division League Champions — first place" },
        { year: "2024-25", text: "All-League 2nd Team — West Bay Athletic League, Foothill Division" },
      ],
    },
  ],

  /* ---------- SHOWCASES & EVENTS ---------- */
  events: {
    upcoming: [
      /* { name: "ECNL Showcase", detail: "San Diego", date: "Oct 2026" }, */
    ],
    past: [
      { name: "NorCal PDP / Oshima Cup",          detail: "Japan",          date: "Aug 2026" },
      { name: "ECNL North American Cup",          detail: "Playoffs",       date: "2026, 2025" },
      { name: "ECNL Showcase",                    detail: "North Carolina", date: "May 2026, 2025" },
      { name: "SUSA Girls College Showcase",      detail: "",               date: "Feb 2026" },
      { name: "ECNL Showcase",                    detail: "Phoenix",        date: "Mar 2026, Nov 2025, Apr 2025" },
      { name: "Pleasanton Rage College Showcase", detail: "",               date: "Aug 2025" },
      { name: "ECNL Showcase",                    detail: "San Diego",      date: "Oct 2024" },
      { name: "Gothia Cup",                       detail: "Sweden",         date: "Jul 2024" },
      { name: "Cup No. 1",                        detail: "Denmark",        date: "Jul 2024" },
      { name: "San Diego Surf Cup",               detail: "",               date: "Jul 2024" },
    ],
  },

  /* ---------- ARTICLES ---------- */
  articles: [
    { year: "2026", title: "2028 Midfielders / Forwards to Watch Ahead of ECNL North Carolina",
      source: "Prep Soccer",
      url: "https://prepsoccer.com/2026/05/2028-midfielders-to-watch-ahead-of-ecnl-north-carolina/" },
    { year: "2025", title: "Top-level talent and up-and-coming players you need to know",
      source: "Prep Soccer",
      url: "https://prepsoccer.com/2025/10/top-level-talent-and-up-and-coming-players-you-need-to-know/" },
    { year: "2025", title: "California 2028 Girls — New Faces in the Prep Soccer Rankings",
      source: "Prep Soccer",
      url: "https://prepsoccer.com/2025/10/california-2028-girls-new-faces-in-the-prep-soccer-rankings/" },
  ],

  /* ---------- CLUBS & VOLUNTEER WORK ---------- */
  clubs: [
    { year: "2025-26", text: "Vice President, Red Cross Community Service" },
    { year: "2025-26", text: "Selected for Student Academic Council" },
    { year: "2025",    text: "Writer, TrailBlazeHERS — women's sports magazine" },
  ],

  /* ---------- COACHING REFERENCES ----------
     Give each of them a heads up before this goes live — their
     numbers become publicly indexed. */
  coaches: [
    { role: "Head coach",             name: "Lloyd Grist",
      email: "lloydgrist@gmail.com",  phone: "510-398-3366" },
    { role: "ECNL coaching director", name: "Paul Bravo",
      email: "paulgbravo9@gmail.com", phone: "720-475-6991" },
    { role: "Fitness",                name: "Yuta Tanaka",
      email: "Yuta.Tanaka@gmail.com", phone: "650-619-3670" },
    { role: "Training",               name: "Yvan A. Trevino",
      email: "yvan@1v1training.com",  phone: "415-860-8277" },
  ],

  /* ---------- SOCIAL ---------- */
  social: {
    youtube:   "https://www.youtube.com/@fiona-alston-soccer",
    instagram: "https://www.instagram.com/fiona.alston.soccer/",
  },

  lastUpdated: "August 2026",
};
