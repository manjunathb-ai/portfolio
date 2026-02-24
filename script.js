// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", () => {

  /* ================= 3D TILT EFFECT ================= */

  const cards = document.querySelectorAll(".skill-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 18;
      const rotateY = (x - centerX) / 18;

      card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
  });


  /* ================= SCROLL REVEAL ================= */

  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


  /* ================= NAVBAR SCROLL EFFECT ================= */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


  /* ================= ACTIVE NAV LINK ================= */

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

});

function revealOnScroll() {
  const elements = document.querySelectorAll(".project-row");

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

/* ================= CURSOR FOLLOW ================= */

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 10 + "px";
  cursor.style.top = e.clientY - 10 + "px";
});

/* ================= PREMIUM CONTACT ANIMATION ================= */

(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

const contactForm = document.getElementById("contact-form");
const submitBtn = document.querySelector(".contact-btn");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(function() {

        showToast("Message sent successfully 🚀");
        contactForm.reset();

        submitBtn.innerHTML = "Send Message";
        submitBtn.disabled = false;

    }, function(error) {

        showToast("Failed to send. Try again ❌");
        submitBtn.innerHTML = "Send Message";
        submitBtn.disabled = false;

        console.error(error);
    });
  });
}

/* Toast Function */

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", function () {

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
