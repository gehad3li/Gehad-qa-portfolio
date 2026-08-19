# Gehad — QA Portfolio

A simple, honest, one-page portfolio documenting Gehad's journey from software
testing fundamentals toward a first role as a Software QA Engineer.

No build tools, no frameworks — plain HTML, CSS and JavaScript, so it's easy
to open, understand, and keep updating as new skills, projects and
certificates are completed.

## File structure

```
gehad-portfolio/
├── index.html        # Page structure and content (sections)
├── css/
│   └── styles.css    # All styling (design tokens at the top)
├── js/
│   └── script.js     # Editable data (skills, projects, journey, certs) + rendering
└── README.md
```

## Running it locally

You don't need Node, npm, or any build step. Pick one:

**Option 1 — just open it**
Double-click `index.html` (or right-click → Open With → your browser).

**Option 2 — a local server (recommended, avoids browser file:// quirks)**

If you have Python installed:
```bash
cd gehad-portfolio
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

If you have Node/VS Code, the "Live Server" extension works too, or:
```bash
npx serve .
```

## How to update the site as you learn

Almost everything you'll want to change lives in **`js/script.js`**, at the
top, in a clearly marked `CONFIG / DATA` block. You shouldn't need to touch
the HTML or CSS for routine updates.

### 1. Update your links
```js
const CONFIG = {
  social: {
    github: "https://github.com/your-github-username",
    linkedin: "https://www.linkedin.com/in/your-linkedin-username",
    email: "your.email@example.com",
  },
  lastUpdated: "August 2026",
};
```
Replace the placeholder URLs and email, and bump `lastUpdated` whenever you
make a meaningful update.

### 2. Move a skill from "Up next" to "Currently learning" (or add new ones)
Edit the `SKILLS` object — just move strings between the two arrays.

### 3. Add a finished project
Add an object to the `PROJECTS` array:
```js
const PROJECTS = [
  {
    name: "HeronSignal QA Practice",
    description: "Wrote manual test cases and bug reports for HeronSignal's core flows.",
    testingType: "Manual Testing",
    tools: ["Jira", "Excel"],
    whatITested: "Signup flow, form validation, and navigation.",
    githubLink: "https://github.com/you/heronsignal-qa",
    detailsLink: "",
  },
];
```
Once you add a real project, you'll probably want to update or remove the
`UPCOMING_PROJECT` object below it, since it's meant as a "coming soon"
preview, not a finished project.

### 4. Update the learning journey timeline
Change a stage's `status` in the `JOURNEY` array: `"planned"` →
`"in-progress"` → `"done"`, as you actually complete each stage.

### 5. Add a completed certificate
Move it from `PLANNED_CERTIFICATES` into `CERTIFICATES`:
```js
const CERTIFICATES = [
  { name: "ISTQB Foundation", provider: "ISTQB", date: "2026", link: "" },
];
```

The page re-renders these sections from the data automatically — you never
need to hand-edit repeated HTML blocks.

## Publishing with GitHub Pages

1. Create a new GitHub repository (e.g. `qa-portfolio`) and push this folder
   to it:
   ```bash
   cd gehad-portfolio
   git init
   git add .
   git commit -m "Initial QA portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/qa-portfolio.git
   git push -u origin main
   ```
2. On GitHub, go to your repository → **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
5. GitHub will publish your site at:
   `https://your-username.github.io/qa-portfolio/`
   (it can take a minute or two the first time).
6. Every time you `git push` an update, the live site updates automatically
   within a minute or so.

## Notes on honesty and content

This site is intentionally written to reflect a genuine beginner/learning
stage — no fabricated work experience, clients, projects, statistics or
testimonials. Keep it that way as you extend it: only move something from
"planned" to "done" once it's actually true.
