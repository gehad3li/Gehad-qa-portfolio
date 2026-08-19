/* =========================================================
   Gehad — QA Portfolio
   ---------------------------------------------------------
   EVERYTHING YOU'LL WANT TO EDIT LIVES IN THE "CONFIG /
   DATA" BLOCK BELOW. You should not need to touch the
   render logic further down to add a project, a skill,
   a certificate, or update a link.
   ========================================================= */

/* ---------- CONFIG / DATA ---------- */

const CONFIG = {
  social: {
  github: "https://github.com/gehad3li",
  linkedin: "https://www.linkedin.com/in/gehadali/",
  email: "mailto:Gehadali.egy@gmail.com"
}
  },
  // Shown in the footer. Update by hand whenever you make a real update.
  lastUpdated: "August 2026",
};

const SKILLS = {
  learning: ["Software Testing Fundamentals", "Manual Testing"],
  upNext: [
    "Test Case Design",
    "Bug Reporting",
    "Jira",
    "API Testing",
    "Postman",
    "SQL",
    "Git / GitHub",
    "Playwright",
  ],
};

/**
 * Completed / in-progress projects with real work behind them.
 * Add an object here when you have something real to show —
 * leave the array empty until then.
 *
 * Shape:
 * {
 *   name: "Project name",
 *   description: "One or two sentences about the project.",
 *   testingType: "Manual Testing" | "API Testing" | "Exploratory Testing" | ...,
 *   tools: ["Jira", "Postman"],
 *   whatITested: "Short note on what you actually tested.",
 *   githubLink: "https://github.com/you/repo",   // optional — omit or leave ""
 *   detailsLink: "",                              // optional — omit or leave ""
 * }
 */
const PROJECTS = [
  // Add your first real project here when it's ready.
];

/** A single "coming up next" preview — keep it honest, mark it as not done. */
const UPCOMING_PROJECT = {
  name: "HeronSignal — QA Practice",
  description:
    "My first hands-on QA project: writing test cases and bug reports against HeronSignal to practice manual testing fundamentals.",
  status: "In progress",
};

/**
 * The learning roadmap toward a first QA role.
 * status: "in-progress" | "planned" | "done"
 */
const JOURNEY = [
  { title: "Software Testing Fundamentals", status: "in-progress" },
  { title: "Manual Testing", status: "in-progress" },
  { title: "HeronSignal QA Practice", status: "planned" },
  { title: "API Testing + Postman", status: "planned" },
  { title: "SQL Basics", status: "planned" },
  { title: "Automation Testing", status: "planned" },
  { title: "Playwright", status: "planned" },
  { title: "First QA Role", status: "planned" },
];

/**
 * Certificates you've actually completed. Add an entry here
 * once you finish a course — move it out of PLANNED_CERTIFICATES.
 * Shape: { name, provider, date, link }  (date/link optional)
 */
const CERTIFICATES = [];

/** Courses / certifications on the roadmap but not finished yet. */
const PLANNED_CERTIFICATES = [
  { name: "Foundations of Software Testing and Validation", provider: "Coursera" },
  { name: "Manual Testing Course", provider: "" },
  { name: "The Complete 2026 Software Testing Bootcamp", provider: "" },
  { name: "Software Testing Diploma", provider: "Route Academy" },
  { name: "ISTQB Foundation", provider: "if completed" },
];

/* ---------- Helpers ---------- */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const el = (tag, className, html) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const externalLinkIcon = `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>`;
const githubMiniIcon = `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.19-3.37-1.19-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>`;

/* ---------- Wire up social links + nav ---------- */

function wireSocialLinks() {
  document.querySelectorAll("[data-social]").forEach((node) => {
    const key = node.getAttribute("data-social");
    if (key === "email") {
      node.href = `mailto:${CONFIG.social.email}`;
      const label = $("#emailLabel");
      if (label) label.textContent = CONFIG.social.email;
    } else if (CONFIG.social[key]) {
      node.href = CONFIG.social[key];
    }
  });
}

function wireNavToggle() {
  const toggle = $("#navToggle");
  const nav = $("#primaryNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * HeronSignal funnel events for this portfolio's real calls to action.
 * Safe, non-sensitive payloads only (cta name + page location) — see
 * https://heronsignal.com/llms.txt for the event() payload guidelines.
 * No-ops silently if the tracker hasn't loaded (ad blockers, offline, etc).
 */
function wireAnalyticsEvents() {
  const track = (cta, location) => {
    window.heronsignal?.event("cta_click", { cta, location });
  };

  const bindings = [
    { selector: '.hero-actions a[href="#projects"]', cta: "view_projects", location: "hero" },
    { selector: '.hero-actions a[data-social="github"]', cta: "github", location: "hero" },
    { selector: '.hero-actions a[data-social="linkedin"]', cta: "linkedin", location: "hero" },
    { selector: '.nav-cta[data-social="github"]', cta: "github", location: "nav" },
    { selector: '#github .btn[data-social="github"]', cta: "github", location: "github_section" },
    { selector: '.contact-card[data-social="linkedin"]', cta: "linkedin", location: "contact" },
    { selector: '.contact-card[data-social="github"]', cta: "github", location: "contact" },
    { selector: '.contact-card[data-social="email"]', cta: "email", location: "contact" },
  ];

  bindings.forEach(({ selector, cta, location }) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.addEventListener("click", () => track(cta, location));
    });
  });
}

/* ---------- Render: Skills ---------- */

function renderSkills() {
  const learningList = $("#skillsLearning");
  const upNextList = $("#skillsUpNext");

  SKILLS.learning.forEach((skill) => {
    learningList.appendChild(el("li", null, escapeHtml(skill)));
  });
  SKILLS.upNext.forEach((skill) => {
    upNextList.appendChild(el("li", null, escapeHtml(skill)));
  });
}

/* ---------- Render: Projects ---------- */

function renderProjectCard(project) {
  const card = el("article", "project-card");

  const tools = (project.tools || [])
    .map((t) => `<span>${escapeHtml(t)}</span>`)
    .join("");

  const links = [];
  if (project.githubLink) {
    links.push(
      `<a href="${escapeHtml(project.githubLink)}" target="_blank" rel="noopener">${githubMiniIcon}Code</a>`
    );
  }
  if (project.detailsLink) {
    links.push(
      `<a href="${escapeHtml(project.detailsLink)}" target="_blank" rel="noopener">${externalLinkIcon}Details</a>`
    );
  }

  card.innerHTML = `
    <div class="project-card-head">
      <h3 class="project-card-title">${escapeHtml(project.name)}</h3>
      <span class="badge badge--done">Done</span>
    </div>
    <p class="project-card-desc">${escapeHtml(project.description || "")}</p>
    <dl class="project-meta">
      ${project.testingType ? `<dt>Type</dt><dd>${escapeHtml(project.testingType)}</dd>` : ""}
      ${project.whatITested ? `<dt>Tested</dt><dd>${escapeHtml(project.whatITested)}</dd>` : ""}
    </dl>
    ${tools ? `<div class="project-tools">${tools}</div>` : ""}
    ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
  `;
  return card;
}

function renderUpcomingCard(project) {
  const card = el("article", "project-card upcoming-card");
  card.innerHTML = `
    <div class="project-card-head">
      <h3 class="project-card-title">${escapeHtml(project.name)}</h3>
      <span class="badge badge--progress">${escapeHtml(project.status)}</span>
    </div>
    <p class="project-card-desc">${escapeHtml(project.description)}</p>
  `;
  return card;
}

function renderProjects() {
  const grid = $("#projectsGrid");

  if (PROJECTS.length === 0) {
    const empty = el("div", "empty-card");
    empty.innerHTML = `
      <p>Projects coming soon</p>
      <p>Currently building my first QA projects — check back soon, or follow along on GitHub.</p>
    `;
    grid.appendChild(empty);
  } else {
    PROJECTS.forEach((project) => grid.appendChild(renderProjectCard(project)));
  }

  if (UPCOMING_PROJECT) {
    grid.appendChild(renderUpcomingCard(UPCOMING_PROJECT));
  }
}

/* ---------- Render: Journey timeline ---------- */

function renderJourney() {
  const list = $("#timeline");
  const total = JOURNEY.length;
  const doneOrProgressCount = JOURNEY.filter(
    (s) => s.status === "done" || s.status === "in-progress"
  ).length;

  // Roughly fill the connecting line up to the last active stage.
  const progressStop = Math.max(
    8,
    Math.round((doneOrProgressCount / total) * 100)
  );
  list.style.setProperty("--progress-stop", `${progressStop}%`);

  const statusLabel = { done: "Done", "in-progress": "In progress", planned: "Coming soon" };
  const statusBadgeClass = { done: "badge--done", "in-progress": "badge--progress", planned: "badge--planned" };

  JOURNEY.forEach((stage) => {
    const item = el("li", "timeline-item");
    item.setAttribute("data-status", stage.status);
    item.innerHTML = `
      <div class="timeline-row">
        <span class="timeline-title">${escapeHtml(stage.title)}</span>
        <span class="badge ${statusBadgeClass[stage.status]}">${statusLabel[stage.status]}</span>
      </div>
    `;
    list.appendChild(item);
  });
}

/* ---------- Render: Certificates ---------- */

function renderCertificates() {
  const certList = $("#certList");
  const lede = $("#certificatesLede");
  const plannedWrap = $("#certPlannedWrap");
  const plannedList = $("#certPlannedList");

  if (CERTIFICATES.length === 0) {
    const empty = el("li", "cert-empty");
    empty.textContent = "No certificates completed yet — this list will grow as I finish each course.";
    certList.appendChild(empty);
  } else {
    lede.textContent = "Courses and certifications I've completed so far.";
    CERTIFICATES.forEach((cert) => {
      const item = el("li", "cert-item");
      const linkOpen = cert.link ? `<a href="${escapeHtml(cert.link)}" target="_blank" rel="noopener">` : "<span>";
      const linkClose = cert.link ? "</a>" : "</span>";
      item.innerHTML = `
        <span>
          <strong>${escapeHtml(cert.name)}</strong>
          <small>${escapeHtml(cert.provider || "")}${cert.date ? " · " + escapeHtml(cert.date) : ""}</small>
        </span>
        <span class="badge badge--done">Done</span>
      `;
      certList.appendChild(item);
    });
  }

  if (PLANNED_CERTIFICATES.length === 0) {
    plannedWrap.remove();
  } else {
    PLANNED_CERTIFICATES.forEach((cert) => {
      const item = el("li");
      item.innerHTML = `
        <span>${escapeHtml(cert.name)}</span>
        <small class="mono">${escapeHtml(cert.provider || "")}</small>
      `;
      plannedList.appendChild(item);
    });
  }
}

/* ---------- Footer ---------- */

function renderFooter() {
  const node = $("#lastUpdated");
  if (node) node.textContent = `Last updated: ${CONFIG.lastUpdated}`;
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  wireSocialLinks();
  wireNavToggle();
  wireAnalyticsEvents();
  renderSkills();
  renderProjects();
  renderJourney();
  renderCertificates();
  renderFooter();
});
