const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

revealItems.forEach((item, index) => {
  item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

const projectsRail = document.querySelector("[data-projects-rail]");
const projectsPrev = document.querySelector(".projects-prev");
const projectsNext = document.querySelector(".projects-next");

if (projectsRail) {
  const projectCards = Array.from(projectsRail.querySelectorAll(".poster-card"));
  let hoverCard = null;
  let settledCard = null;
  let settleTimeout = null;

  const getScrollAmount = () => {
    const link = projectsRail.querySelector(".poster-card-link");
    if (!link) return 364;
    const gap = Number.parseFloat(getComputedStyle(projectsRail).columnGap || getComputedStyle(projectsRail).gap) || 32;
    return link.getBoundingClientRect().width + gap;
  };

  const updateFocusedCard = () => {
    const activeCard = hoverCard || settledCard;
    projectsRail.classList.toggle("has-focus", Boolean(activeCard));

    projectCards.forEach((card) => {
      card.classList.toggle("is-popped", card === activeCard);
    });
  };

  const findCenteredCard = () => {
    const railRect = projectsRail.getBoundingClientRect();
    const railCenter = railRect.left + railRect.width / 2;
    let closestCard = null;
    let closestDistance = Number.POSITIVE_INFINITY;

    projectCards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - railCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });

    settledCard = closestCard;
    updateFocusedCard();
  };

  const scheduleSettle = () => {
    if (settleTimeout) {
      clearTimeout(settleTimeout);
    }

    settleTimeout = setTimeout(() => {
      findCenteredCard();
    }, 150);
  };

  if (projectsPrev) {
    projectsPrev.addEventListener("click", () => {
      projectsRail.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
      scheduleSettle();
    });
  }

  if (projectsNext) {
    projectsNext.addEventListener("click", () => {
      projectsRail.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
      scheduleSettle();
    });
  }

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  const stopDragging = () => {
    isDragging = false;
    projectsRail.classList.remove("is-dragging");
    scheduleSettle();
  };

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      hoverCard = card;
      updateFocusedCard();
    });

    card.addEventListener("mouseleave", () => {
      if (hoverCard === card) {
        hoverCard = null;
        updateFocusedCard();
      }
    });
  });

  projectsRail.addEventListener("scroll", scheduleSettle, { passive: true });

  window.addEventListener("resize", scheduleSettle);

  projectsRail.addEventListener("pointerdown", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }
    isDragging = true;
    startX = event.clientX;
    startScrollLeft = projectsRail.scrollLeft;
    projectsRail.classList.add("is-dragging");
    projectsRail.setPointerCapture(event.pointerId);
  });

  projectsRail.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const delta = event.clientX - startX;
    projectsRail.scrollLeft = startScrollLeft - delta;
  });

  projectsRail.addEventListener("pointerup", stopDragging);
  projectsRail.addEventListener("pointercancel", stopDragging);
  projectsRail.addEventListener("pointerleave", () => {
    if (isDragging) stopDragging();
  });

  findCenteredCard();
}

const hackathonRollSection = document.querySelector("[data-hackathon-roll-section]");
const hackathonRollCards = Array.from(document.querySelectorAll("[data-roll-card]"));

if (hackathonRollSection && hackathonRollCards.length) {
  let activeHackathonCard = hackathonRollCards[0];

  const getHackathonOffsets = () => {
    const isMobile = window.innerWidth <= 560;
    return isMobile
      ? { active: 109, collapsed: [313, 285, 257, 229, 201, 173] }
      : { active: -220, collapsed: [-8, -36, -64, -92, -120, -148] };
  };

  const renderHackathonStack = () => {
    const { active: activeOffset, collapsed: collapsedOffsets } = getHackathonOffsets();
    const collapsedCards = hackathonRollCards.filter((card) => card !== activeHackathonCard);

    hackathonRollCards.forEach((card, index) => {
      const isActive = activeHackathonCard === card;
      const collapsedIndex = collapsedCards.indexOf(card);
      const translateY = isActive ? activeOffset : collapsedOffsets[collapsedIndex] ?? collapsedOffsets[collapsedOffsets.length - 1];
      const scale = isActive ? 1.025 : 0.992;
      const rotate = isActive ? 0 : -0.85;
      const zIndex = isActive ? 120 : 70 - collapsedIndex;
      const opacity = isActive ? 1 : 0.94;
      const shadowY = isActive ? 34 : 14;
      const shadowBlur = isActive ? 42 : 20;
      const shadowOpacity = isActive ? 0.3 : 0.14;

      card.classList.toggle("is-active", isActive);
      card.style.transform = `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`;
      card.style.opacity = String(opacity);
      card.style.zIndex = String(zIndex);
      card.style.boxShadow = `0 ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity})`;
    });
  };

  hackathonRollCards.forEach((card) => {
    card.addEventListener("click", () => {
      activeHackathonCard = card;
      renderHackathonStack();
    });
  });

  window.addEventListener("resize", renderHackathonStack);

  renderHackathonStack();
}
