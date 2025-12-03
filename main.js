const header = document.getElementById("site-header");
const nav = document.getElementById("main-nav");
const navToggle = document.getElementById("nav-toggle");

const toggleNavigation = () => {
  nav.classList.toggle("open");
  const isOpen = nav.classList.contains("open");
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.innerHTML = isOpen ? "<i class='ph ph-x'></i>" : "<i class='ph ph-list'></i>";
};

navToggle?.addEventListener("click", toggleNavigation);
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      toggleNavigation();
    }
  })
);

const handleScroll = () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

document.addEventListener("scroll", handleScroll);
handleScroll();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

const counter = document.querySelector("[data-counter]");
if (counter) {
  const animateCounter = () => {
    const target = parseInt(counter.getAttribute("data-counter"), 10);
    let current = 0;
    const duration = 2000;
    const frame = () => {
      current += target / (duration / 16);
      if (current >= target) {
        counter.textContent = target.toLocaleString("pt-BR");
        return;
      }
      counter.textContent = Math.round(current).toLocaleString("pt-BR");
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          counterObserver.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  counterObserver.observe(counter);
}
    
