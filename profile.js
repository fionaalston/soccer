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
  eyebrow:   "Left-footed forward / defender",
  club:      "De Anza Force 10G ECNL",
  role:      "Forward / Defender #17",
  classYear: "Class of 2028",

  /* Shows in the hero when filled. Leave "" until it happens. */
  commitment: "",

  /* One line that makes the case. Set in italic serif under the name. */
  positioning: "Speedy, left-footed winger (L/R) who also plays outside back, with multiple US Soccer Talent ID invitations and a NorCal PDP roster selection to play in Hakodate, Japan.",

  /* Hero portrait. A background-free cut-out (transparent PNG/WebP) reads
     best — she stands on the hero baseline against the green. Drop the file
     next to index.html, or paste any image URL. */
  heroPhoto: "fiona-hero.webp",

  /* ---------- BADGES ----------
     Add logo files next to index.html and reference them below.
     Any badge without an image falls back to its text label. */
  badges: [
    { label: "De Anza Force", image: "force-logo.png" },
    { label: "ECNL",          image: "ecnl-logo.png" },
    { label: "US Soccer",     image: "us-soccer-logo.png" },
    { label: "NorCal PDP",    image: "norcal-pdp-logo.png" },
  ],

  /* ---------- QUICK READ (band under hero) ---------- */
  keyFacts: [
    { label: "Grad year", value: "2028" },
    { label: "Position",  value: "Forward / Defender" },
    { label: "Primary Foot", value: "Left" },
    { label: "Club",      value: "De Anza Force 10G ECNL" },
    { label: "GPA",       value: "4.08" },
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
    { label: "NCAA ID",       value: "2505617110" },
  ],

  /* Second photo, beside the personal info card. */
  personalPhoto: "fiona-action.jpg",

  /* ---------- CONTACT ---------- */
  contact: {
    email:       "fionaalston2028@gmail.com",
    phone:       "628-278-1047",
  },

  /* ---------- ACADEMICS ---------- */
  academics: {
    school:     "Crystal Springs Uplands School",
    address:    "",
    classYear:  "Class of 2028 (Junior)",
    gpa:        "4.08",
    courses: [
      "Honors Pre-Calculus/Calculus",
      "Honors Advanced Topics in Biology + Lab",
      "Honors Mandarin V",
      "Honors Advanced Topics History/Government",
      "College Prep English III",
      "Advanced Projects Glazing/Sculpture",
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
        { year: "",        text: "De Anza Force 10G ECNL | Starter" },
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
        { year: "2026", text: "U16 State Selection — Oshima Cup | Hakodate, Japan" },
      ],
    },
    {
      group: "High School",
      items: [
        { year: "2025",    text: "Freshman Starter, Division League 1st Place Champions" },
        { year: "2024-25", text: "Selected for All-League Team (Second)" },
      ],
    },
  ],

  /* ---------- SHOWCASES & EVENTS ---------- */
  events: {
    upcoming: [
      { name: "vs. Marin FC U17 ECNL",          detail: "De Anza College",              date: "Aug 22, 2026",   time: "5:00 PM" },
      { name: "vs. Mustang SC U17 ECNL",        detail: "Mustang Soccer Complex",       date: "Aug 29, 2026",   time: "3:00 PM" },
      { name: "vs. Placer United U17 ECNL",     detail: "De Anza College",              date: "Aug 30, 2026",   time: "11:00 AM" },
      { name: "vs. COSC U17 ECNL",              detail: "Edison High School Fields",    date: "Sep 12, 2026",   time: "10:00 AM" },
      { name: "vs. MVLA U17 ECNL",              detail: "De Anza College",              date: "Sep 19, 2026",   time: "TBD" },
      { name: "vs. San Juan SC U17 ECNL",       detail: "San Juan Soccer Complex",      date: "Sep 20, 2026",   time: "5:00 PM" },
      { name: "vs. Bay Area Surf U17 ECNL",     detail: "De Anza College",              date: "Sep 26, 2026",   time: "TBD" },
      { name: "vs. Davis Legacy U17 ECNL",      detail: "De Anza College",              date: "Sep 27, 2026",   time: "4:00 PM" },
      { name: "vs. Stanislaus Surf U17 ECNL",   detail: "De Anza College",              date: "Oct 3, 2026",    time: "TBD" },
      { name: "vs. Santa Rosa United U17 ECNL", detail: "Trione Fields",                date: "Oct 17, 2026",   time: "11:00 AM" },
      { name: "vs. Pleasanton RAGE U17 ECNL",   detail: "De Anza College",              date: "Oct 24, 2026",   time: "TBD" },
      { name: "vs. Marin FC U17 ECNL",          detail: "Terra Linda High School",      date: "Oct 25, 2026",   time: "1:00 PM" },
      { name: "vs. COSC U17 ECNL",              detail: "De Anza College",              date: "Oct 31, 2026",   time: "TBD" },
      { name: "vs. MVLA U17 ECNL",              detail: "Foothill College",             date: "Nov 7, 2026",    time: "TBD" },
      { name: "ECNL Phoenix National Showcase",    detail: "Reach 11 Sports Complex, Phoenix, AZ", date: "Nov 13-15, 2026", time: "TBD", national: true },
      { name: "vs. Placer United U17 ECNL",     detail: "Placer Valley Soccer Complex", date: "Mar 20, 2027",   time: "3:45 PM" },
      { name: "vs. Mustang SC U17 ECNL",        detail: "De Anza College",              date: "Mar 21, 2027",   time: "TBD" },
      { name: "ECNL Phoenix National Showcase",    detail: "Reach 11 Sports Complex, Phoenix, AZ", date: "Apr 2-4, 2027", time: "TBD", national: true },
      { name: "vs. San Juan SC U17 ECNL",       detail: "De Anza College",              date: "Apr 10, 2027",   time: "TBD" },
      { name: "vs. Davis Legacy U17 ECNL",      detail: "Davis Legacy Soccer Complex",  date: "Apr 17, 2027",   time: "12:00 PM" },
      { name: "vs. Bay Area Surf U17 ECNL",     detail: "",                             date: "Apr 18, 2027",   time: "TBD" },
      { name: "vs. Stanislaus Surf U17 ECNL",   detail: "Thomas Downey High School",    date: "Apr 24, 2027",   time: "10:55 AM" },
      { name: "vs. Santa Rosa United U17 ECNL", detail: "De Anza College",              date: "May 1, 2027",    time: "TBD" },
      { name: "vs. Pleasanton RAGE U17 ECNL",   detail: "Val Vista Fields",             date: "May 8, 2027",    time: "TBD" },
      { name: "ECNL North Carolina Showcase",   detail: "Bryan Park Soccer Complex, Browns Summit, NC", date: "May 29-31, 2027", time: "TBD", national: true },
    ],
    previous: {
      international: [
        { name: "NorCal PDP / Oshima Cup", detail: "Japan",   date: "Aug 2026" },
        { name: "Gothia Cup",              detail: "Sweden",  date: "Jul 2024" },
        { name: "Cup No. 1",               detail: "Denmark", date: "Jul 2024" },
      ],
      nationalShowcases: [
        { name: "ECNL Playoffs",           detail: "North American Cup", date: "2026, 2025" },
        { name: "ECNL Showcase",           detail: "North Carolina", date: "May 2026, 2025" },
        { name: "ECNL Showcase",           detail: "Phoenix",        date: "Mar 2026, Nov 2025, Apr 2025" },
        { name: "ECNL Showcase",           detail: "San Diego",      date: "Oct 2024" },
      ],
      otherShowcases: [
        { name: "SUSA College Showcase",      detail: "New York", date: "Feb 2026" },
        { name: "Pleasanton Rage College Showcase", detail: "", date: "Aug 2025" },
        { name: "San Diego Surf Cup",               detail: "", date: "Jul 2024" },
      ],
    },
  },

  /* ---------- ARTICLES ---------- */
  articles: [
    { year: "2026", title: "ECNL Girls Northern Cal Players to Watch",
      source: "TopDrawerSoccer",
      url: "https://www.topdrawersoccer.com/club-soccer-articles/ecnl-girls-northern-cal-players-to-watch_aid56298" },
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
    { year: "2026-27", text: "Co-President, Black Student Union" },
    { year: "2025-26", text: "Vice President, Red Cross Community Service" },
    { year: "2026-27", text: "Selected, Student Academic Council" },
    { year: "2025-26", text: "Selected, Student Academic Council" },
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
