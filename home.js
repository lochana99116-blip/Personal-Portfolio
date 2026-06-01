// SCROLL EFFECT //
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");

  if (window.scrollY > 50) {
    navbar.style.padding = "8px 0";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    navbar.style.transition = "0.3s";
  } else {
    navbar.style.padding = "15px 0";
    navbar.style.boxShadow = "none";
  }
});

// SCROLL REVEAL ANIMATION //
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".tour-card, .review-card, .section-title, .section-subtitle",
);

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// COUNTER ANIMATION (CTA STATS STYLE) //
function animateCounter(el, target) {
  let count = 0;
  let speed = target / 100;

  const update = () => {
    count += speed;

    if (count < target) {
      el.innerText = Math.floor(count) + "+";
      requestAnimationFrame(update);
    } else {
      el.innerText = target + "+";
    }
  };

  update();
}

// OPTIONAL: if you add counters later
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  animateCounter(counter, parseInt(counter.getAttribute("data-target")));
});

// BUTTON CLICK EFFECT //
document.querySelectorAll(".btn, .cta-button").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});
