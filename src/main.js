const root = document.documentElement;
const tabs = [...document.querySelectorAll(".candidate-tab")];
const panels = [...document.querySelectorAll(".candidate-panel")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function updateScrollState() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  root.style.setProperty("--scroll-progress", clamp(scrollProgress));

  let activeId = panels[0]?.dataset.candidate;

  for (const panel of panels) {
    const rect = panel.getBoundingClientRect();
    const travel = Math.max(1, rect.height - window.innerHeight);
    const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + travel));

    panel.style.setProperty("--panel-progress", progress.toFixed(3));

    if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.45) {
      activeId = panel.dataset.candidate;
      root.style.setProperty("--panel-progress", progress.toFixed(3));
    }
  }

  for (const tab of tabs) {
    tab.classList.toggle("is-active", tab.dataset.target === activeId);
  }
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
updateScrollState();
