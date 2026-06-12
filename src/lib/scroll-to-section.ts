/** Fixed header height (h-18 = 4.5rem) + small buffer */
export const HEADER_SCROLL_OFFSET = 80;

function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

export function scrollToSection(href: string, behavior?: ScrollBehavior) {
  const scrollBehavior = behavior ?? getScrollBehavior();

  if (href === "#hero" || href === "#") {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
    window.history.pushState(null, "", href === "#" ? "#hero" : href);
    return;
  }

  const id = href.startsWith("#") ? href.slice(1) : href;
  const element = document.getElementById(id);

  if (!element) return;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    HEADER_SCROLL_OFFSET;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: scrollBehavior,
  });

  window.history.pushState(null, "", `#${id}`);
}
