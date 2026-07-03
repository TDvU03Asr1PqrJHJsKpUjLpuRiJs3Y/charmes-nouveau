const root = document.documentElement;
document.body.classList.add("js-enabled");
const revealItems = [...document.querySelectorAll(".reveal")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function updateHeaderHeight() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  root.style.setProperty("--header-h", `${Math.ceil(header.getBoundingClientRect().height)}px`);
}

function updateScrollState() {
  updateHeaderHeight();
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  root.style.setProperty("--scroll-progress", clamp(progress).toFixed(4));
}

if (prefersReducedMotion) {
  for (const item of revealItems) item.classList.add("is-visible");
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );

  for (const item of revealItems) observer.observe(item);
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateHeaderHeight();
updateScrollState();
