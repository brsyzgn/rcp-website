export function scrollToSection(href: string) {
  if (href === "#hero" || href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", href === "#" ? "#hero" : href);
    return;
  }

  const id = href.startsWith("#") ? href.slice(1) : href;
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  }
}
