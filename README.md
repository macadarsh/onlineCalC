# Online Calculators — your guide

This is your calculator website. It is made of plain files (HTML, CSS, a little
JavaScript). There is **no database, no build step, and no server to maintain** —
which is exactly what makes it free to host, easy to back up, and easy to move.

If you can copy a folder, you can run and back up this whole site.

---

## 1. What's in this folder

```
Online Calculator/
├── index.html                ← the homepage (lists all calculators)
├── README.md                 ← this guide
├── assets/
│   ├── style.css             ← the look of the whole site (colors, spacing)
│   └── app.js                ← draws the homepage cards (you rarely touch this)
└── calculators/
    ├── calculators.js        ← THE LIST of calculators (you edit this to add one)
    ├── basic/
    │   └── index.html        ← the Basic calculator (self-contained)
    └── loan-emi/
        └── index.html        ← the Loan / EMI calculator (self-contained)
```

The important idea: **each calculator lives in its own folder.** They don't
depend on each other. Adding or removing one never breaks the others.

---

## 2. How to look at it on your own computer

Just **double-click `index.html`** — it opens in your web browser. That's it.
Click a calculator, try it, click "← All calculators" to go back.

(Everything works offline this way because of one small design choice: the list
of calculators is a `.js` file, not data loaded from a server.)

---

## 3. How to add a new calculator later (the modular part)

You asked for this specifically: adding calculators **without touching the
existing ones or the hosting**. Here's the whole process — 3 steps.

**Step 1 — Make a new folder** inside `calculators/`, named in lowercase with
hyphens. Example: `calculators/bmi/`.

**Step 2 — Put an `index.html` inside it.** The easiest way is to copy an
existing calculator as a starting point:
- Copy `calculators/basic/index.html` into your new folder.
- Open it in any text editor, change the title and the maths.
- Keep the line `<link rel="stylesheet" href="../../assets/style.css" />` so it
  matches the site's look automatically.
- Keep the `<a class="back" href="../../index.html">← All calculators</a>` link.

**Step 3 — Add one entry to `calculators/calculators.js`.** Copy an existing
block and change the four fields:

```js
{
  icon:  "⚖️",
  title: "BMI Calculator",
  desc:  "Work out your Body Mass Index.",
  url:   "calculators/bmi/"
}
```

Save, refresh the homepage — your new card appears. **You never edited any
existing calculator or the homepage code.** That's the modular design working.

> Tip: if you ever want me (Claude) to build a specific new calculator for you,
> just ask. The structure above is all I need to follow.

---

## 4. Putting it online for free (GitHub Pages)

GitHub Pages hosts static sites like this one for free, and gives you a free web
address. It also doubles as your backup and version history (every change is
saved forever). One-time setup, then publishing is a button click.

**One-time setup:**

1. Create a free account at <https://github.com>.
2. Install **GitHub Desktop** from <https://desktop.github.com> — this is a
   simple app so you never have to type commands.
3. In GitHub Desktop: **File → New Repository.** Name it something like
   `online-calculator`. For "Local path", choose the folder that *contains* this
   `Online Calculator` folder — or simply create the repo and copy these files
   into it. Click **Create Repository**.
4. You'll see your files listed as changes. Type a short note (e.g. "first
   version") at the bottom-left and click **Commit to main**, then click
   **Publish repository** (untick "Keep this code private" if you want the site
   public).

**Turn on the website:**

5. On github.com, open your repository → **Settings** → **Pages** (left menu).
6. Under "Build and deployment", set **Source = Deploy from a branch**,
   **Branch = main**, folder **/ (root)**, and click **Save**.
7. Wait ~1 minute. The page will show your live address, like
   `https://YOUR-USERNAME.github.io/online-calculator/`. Open it on your phone
   and your computer — same site, works everywhere.

**To publish a change later:** edit files → open GitHub Desktop → write a note →
**Commit to main** → **Push origin**. Your live site updates in about a minute.

---

## 5. Backing up and moving to a different host

This is deliberately painless because the site is "just files."

**Backup:** copy this whole `Online Calculator` folder anywhere — a USB drive,
Google Drive, Dropbox. That copy *is* a complete, working backup. If you used
GitHub (section 4), your backup and full history already live there too.

**Move to a different host:** every free static host accepts the same folder.
No rebuilding, no reconfiguring. For example:
- **Netlify** (<https://app.netlify.com/drop>): drag this folder onto the page →
  instantly live.
- **Cloudflare Pages**: connect your GitHub repo, or upload the folder.
- **Any web host**: upload the files via their file manager.

Because there's no database or special server software, "minimal setup" really
means *drop the folder and you're done.*

---

## 6. Frequently useful facts

- **Is anyone's data stored?** No. Every calculator runs entirely in the
  visitor's browser. Nothing is sent anywhere, so there's nothing to secure.
- **Does it work on mobile?** Yes — the layout adapts to phone screens.
- **Do I need to log in to use the calculators?** No, and neither do your
  visitors. It's a public, open website.
- **What if I break something?** If you used GitHub, you can roll back to any
  earlier version. Otherwise, restore from your folder backup (section 5).

---

*Built as a static, modular site so it stays free to host, trivial to back up,
and portable between hosts.*
