const root = document.documentElement;
const tabs = [...document.querySelectorAll(".candidate-tab")];
const panels = [...document.querySelectorAll(".candidate-panel")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentActiveId = panels[0]?.dataset.candidate || "paris";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const themeWashes = {
  paris: {
    a: "rgba(107, 149, 179, 0.34)",
    b: "rgba(210, 172, 148, 0.22)",
    c: "rgba(143, 156, 153, 0.2)",
  },
  sud: {
    a: "rgba(194, 157, 70, 0.3)",
    b: "rgba(127, 157, 114, 0.24)",
    c: "rgba(79, 148, 181, 0.2)",
  },
  mode: {
    a: "rgba(157, 65, 85, 0.24)",
    b: "rgba(47, 53, 52, 0.13)",
    c: "rgba(210, 166, 164, 0.24)",
  },
};

function setActiveTheme(activeId) {
  const wash = themeWashes[activeId] || themeWashes.paris;
  root.style.setProperty("--wash-a", wash.a);
  root.style.setProperty("--wash-b", wash.b);
  root.style.setProperty("--wash-c", wash.c);

  for (const tab of tabs) {
    const isActive = tab.dataset.target === activeId;
    tab.classList.toggle("is-active", isActive);
    if (isActive) {
      tab.setAttribute("aria-current", "true");
    } else {
      tab.removeAttribute("aria-current");
    }
  }
}

function updateHeaderHeight() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  root.style.setProperty("--header-h", `${Math.ceil(header.getBoundingClientRect().height)}px`);
}

function updateScrollState() {
  updateHeaderHeight();
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  root.style.setProperty("--scroll-progress", clamp(scrollProgress).toFixed(4));

  let activeId = currentActiveId;
  let activeProgress = 0;
  const activationLine = window.innerHeight * 0.46;

  for (const panel of panels) {
    const rect = panel.getBoundingClientRect();
    const travel = Math.max(1, rect.height - window.innerHeight);
    const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + travel));

    panel.style.setProperty("--panel-progress", progress.toFixed(3));

    if (rect.top <= activationLine) {
      activeId = panel.dataset.candidate;
      activeProgress = progress;
    }
  }

  currentActiveId = activeId;
  root.style.setProperty("--panel-progress", activeProgress.toFixed(3));
  setActiveTheme(activeId);
}

for (const tab of tabs) {
  tab.addEventListener("click", () => {
    const panel = document.getElementById(tab.dataset.target);
    if (!panel) return;
    panel.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  });
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateHeaderHeight();
updateScrollState();
