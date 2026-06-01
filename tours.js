document.addEventListener("DOMContentLoaded", () => {
  // NAVBAR SCROLL EFFECT //
  const nav = document.querySelector(".custom-navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

  // HERO ANIMATION ON LOAD //
  const hero = document.querySelector(".tour-hero");

  hero.classList.add("hero-hidden");

  setTimeout(() => {
    hero.classList.add("hero-show");
  }, 200);

  // SCROLL REVEAL ANIMATION //
  const revealElements = document.querySelectorAll(
    ".tour-card, .why-box, .section-title",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 },
  );

  revealElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  // STAGGERED CARD ANIMATION //
  const cards = document.querySelectorAll(".tour-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150 * index);
  });

  // BUTTON CLICK EFFECT //
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");

      setTimeout(() => {
        btn.classList.remove("clicked");
      }, 200);
    });
  });
});
