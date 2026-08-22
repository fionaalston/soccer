# fionaalston2028.com — setup & updating

Two files run this site:

- **`profile.js`** — all the content. This is the only file that gets edited.
- **`index.html`** — the design. Leave it alone.

Hosting is GitHub Pages (free). The domain stays registered at Squarespace; only its DNS points elsewhere. No Squarespace site plan needed.

---

# Part 1 — One-time setup

## 1. Create the repo

On github.com, new repository named `fionaalston2028`. **Public** — GitHub Pages requires it on free accounts. Upload `index.html` and `profile.js`, plus the photos.

## 2. Turn on Pages

Repo → **Settings → Pages**. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.

You'll get `https://<username>.github.io/fionaalston2028`. Confirm it loads before touching DNS.

## 3. Tell GitHub the domain

Still in Settings → Pages, under **Custom domain**, enter `fionaalston2028.com` and save. This writes a `CNAME` file into the repo — leave it there.

## 4. Point DNS at Squarespace

Squarespace → **Domains** → `fionaalston2028.com` → **DNS Settings**.

Delete Squarespace's existing A records and any parking/default records for `@`. Then add:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<username>.github.io` |

Optional IPv6 — four AAAA records on `@`:
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

**Leave MX records alone** if any email runs on this domain.

## 5. Turn on HTTPS

DNS takes 15 minutes to a few hours. Once it resolves, go back to Settings → Pages and tick **Enforce HTTPS**. If the box is greyed out, DNS hasn't propagated — wait and check again.

## 6. Give your spouse access

1. She creates a GitHub account (free).
2. Repo → **Settings → Collaborators → Add people** → her username.
3. In Claude → **Settings → Connectors** → enable **GitHub** → authorize → grant access to this repo.

---

# Part 2 — How she updates the site

She talks to Claude. Plain English, no code.

> Fiona scored twice against Mustang on Saturday — add that to her site.

> Add the ECNL Phoenix showcase in November to upcoming events on Fiona's site.

> Here's a new article about Fiona: [link]. Add it.

> Move the Oshima Cup from upcoming to past.

Claude finds `profile.js`, makes the edit, and commits. The live site updates in about a minute. She may need to hard-refresh (Cmd+Shift+R) to see it.

**If something breaks:** "Revert the last commit on the Fiona site." Every version is kept in GitHub's history — nothing is ever actually lost.

**If the GitHub connector is a hassle:** ask Claude to write out the updated section, then paste it in manually — github.com → `profile.js` → pencil icon → paste → **Commit changes**. Same result, one more step.

---

# Part 3 — Things that need filling in

- [ ] `REPLACE-ME@example.com` in `profile.js` → a real parent email
- [ ] YouTube video IDs for the two highlight reels (the part of the URL after `v=`)
- [ ] `fiona-hero.jpg` — landscape action shot for the hero
- [ ] `fiona-action.jpg` — second photo beside the personal info card
- [ ] NCAA Eligibility Center ID, once registered
- [ ] Transcript PDFs — uncomment the `transcripts` block once uploaded
- [ ] Heads up to Lloyd, Paul, Yuta, and Yvan that their contact details will be public

---

# Part 4 — Adding photos

Drop image files into the repo root next to `index.html`, then reference the filename in `profile.js`. Resize to roughly 2000px wide before uploading — phone photos straight off a camera are 5–10MB and will make the page slow on a hotel connection, which is exactly where coaches will open it.

---

# Troubleshooting

**Site shows a 404 after DNS changes.** Custom domain field in Settings → Pages probably got cleared. Re-enter it.

**"Not secure" warning.** HTTPS certificate hasn't issued yet. Wait, then tick Enforce HTTPS.

**Edit committed but site looks unchanged.** Hard-refresh. GitHub Pages builds take up to a minute.

**Page loads but sections are empty.** Something in `profile.js` is malformed — usually a missing comma or quote. Ask Claude to check the file.
