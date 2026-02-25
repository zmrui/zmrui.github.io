(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const outlineToggle = document.getElementById("outline-toggle");
    const outlineClose = document.getElementById("outline-close");
    const mobileOutline = document.getElementById("mobile-outline");
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const outlineLinks = Array.from(document.querySelectorAll(".cv-outline-link[href^='#']"));
    const anchorLinks = Array.from(document.querySelectorAll("a[href^='#']"));
    let highlightTimeoutId = null;
    const closeMobileOutline = () => {
      if (mobileOutline) {
        mobileOutline.classList.add("hidden");
      }
    };
    if (outlineToggle && mobileOutline) {
      outlineToggle.addEventListener("click", () => {
        mobileOutline.classList.remove("hidden");
      });
    }
    if (outlineClose && mobileOutline) {
      outlineClose.addEventListener("click", closeMobileOutline);
    }
    if (mobileOutline) {
      mobileOutline.addEventListener("click", (event) => {
        if (event.target === mobileOutline) {
          closeMobileOutline();
        }
      });
    }
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") {
          return;
        }
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) {
          return;
        }
        event.preventDefault();
        closeMobileOutline();
        const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - 28;
        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "smooth"
        });
        targetElement.classList.add("cv-section-highlight");
        if (highlightTimeoutId !== null) {
          window.clearTimeout(highlightTimeoutId);
        }
        highlightTimeoutId = window.setTimeout(() => {
          targetElement.classList.remove("cv-section-highlight");
        }, 1200);
      });
    });
    const updateActiveSection = () => {
      if (sections.length === 0 || outlineLinks.length === 0) {
        return;
      }
      const scrollPosition = window.scrollY + 170;
      let currentSectionId = sections[0].id;
      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSectionId = section.id;
        }
      });
      outlineLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${currentSectionId}`;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
  });
})();
