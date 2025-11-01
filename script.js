// ------------------------------
// Tailwind CSS Configuration
// ------------------------------
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#7c5cff", 2: "#00e6b8" }, // Custom brand colors
      },
      boxShadow: {
        soft: "0 10px 35px rgba(0,0,0,.25)", // Custom shadow for soft elements
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }, // vertical floating
        },
        drift: {
          "0%,100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(12px)" }, // horizontal drifting
        },
        pulseGlow: {
          "0%,100%": { opacity: 0.6 },
          "50%": { opacity: 0.12 }, // fading glow effect
        },
      },
      animation: {
        float: "floaty 8s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
};

// ------------------------------
// Preloader Logic
// ------------------------------
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out"); // Trigger fade-out effect
    setTimeout(() => {
      preloader.style.display = "none"; // Hide preloader after animation
    }, 900); // match fade-out duration
  }, 1000); // Loader stays for 1 second
});

// ------------------------------
// Back to Top Button Logic
// ------------------------------
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.8) {
    backToTop.classList.remove("hidden"); // Show button after scroll
  } else {
    backToTop.classList.add("hidden"); // Hide button
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});

// ------------------------------
// Initialize AOS (Animate On Scroll)
// ------------------------------
AOS.init({ duration: 900, once: true, offset: 80 });

// ------------------------------
// Mobile Menu Toggle
// ------------------------------
const mbtn = document.getElementById("menuBtn");
const mmenu = document.getElementById("mobileMenu");
mbtn?.addEventListener("click", () => mmenu.classList.toggle("hidden"));

// ------------------------------
// Scrollspy: Update Active Navigation Link
// ------------------------------
const navLinks = Array.from(document.querySelectorAll("header nav a"));
const sections = navLinks.map((a) =>
  document.querySelector(a.getAttribute("href"))
);
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const link = navLinks.find((l) => l.getAttribute("href") === "#" + id);
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("text-white"));
        link?.classList.add("text-white"); // Highlight active nav link
      }
    });
  },
  { rootMargin: "-60% 0px -35% 0px", threshold: 0 }
);
sections.forEach((s) => s && spy.observe(s));

// ------------------------------
// Contact Form Validation (Updated + Reply-To Fix)
// -----------------------------------------------

(function () {
      emailjs.init({
        publicKey: "GX24DyvJZL7MJiA4l", // your EmailJS Public Key
      });
    })();

    document.getElementById("contactForm").addEventListener("submit", async function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const emailHint = document.getElementById("emailHint");
      const formStatus = document.getElementById("formStatus");
      const submitBtn = document.getElementById("submitBtn");

      emailHint.classList.add("hidden");
      formStatus.textContent = "";
      formStatus.className = "text-sm text-center mt-2";

      if (!email.endsWith("@gmail.com")) {
        emailHint.classList.remove("hidden");
        return;
      }

      if (!name || !email || !message) {
        formStatus.textContent = "⚠️ Please fill in all fields.";
        formStatus.classList.add("text-rose-400");
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      try {
        const response = await emailjs.send("service_j20mg8j", "template_zn5oc5s", {
          from_name: name,
          from_email: email,
          reply_to: email,
          message: `📬 You have received a new message from your website:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message:\n${message}\n\n🕒 Sent on: ${new Date().toLocaleString()}`,
        });

        if (response.status === 200) {
          formStatus.textContent = "✅ Message sent successfully!";
          formStatus.classList.add("text-green-400");
          document.getElementById("contactForm").reset();
        } else {
          throw new Error("Email not sent");
        }
      } catch (error) {
        console.error("EmailJS Error:", error);
        formStatus.textContent = "❌ Failed to send message. Please try again.";
        formStatus.classList.add("text-rose-400");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    });


// ------------------------------
// Auto Update Current Year
// ------------------------------
document.getElementById("year").textContent = new Date().getFullYear();

// ------------------------------
// Rotating Text Effect
// ------------------------------
const phrases = [
  "Data Science Enthusiast",
  "Machine Learning Enthusiast",
  "Full-Stack Developer",
  "Artificial Intelligence Enthusiast",
  "Problem Solver",
  "Python Developer",
];
let index = 0;
const rotatingText = document.getElementById("rotating-text");

setInterval(() => {
  rotatingText.classList.add("opacity-0"); // fade out
  setTimeout(() => {
    index = (index + 1) % phrases.length;
    rotatingText.textContent = phrases[index]; // change text
    rotatingText.classList.remove("opacity-0"); // fade in
  }, 500); // match transition duration
}, 3000); // text change interval

// ------------------------------
// Header Navigation Active Link Logic
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const HEADER_HEIGHT = 80; // Approximate header height
  const activeClasses = [
    "bg-gradient-to-r",
    "from-brand",
    "to-brand-2",
    "text-black",
    "shadow-md",
    "ring-1",
    "ring-white/10",
    "scale-[1.02]",
  ];

  const navLinks = Array.from(document.querySelectorAll("#main-nav .nav-link"));
  const linkById = new Map(
    navLinks.map((a) => [a.getAttribute("href").replace("#", ""), a])
  );

  function clearActive() {
    navLinks.forEach((a) => a.classList.remove(...activeClasses));
  }

  function setActive(id) {
    if (!id || !linkById.has(id)) return;
    clearActive();
    linkById.get(id).classList.add(...activeClasses);
  }

  const sections = Array.from(linkById.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  setActive((location.hash || "").replace("#", "") || sections[0]?.id || null);

  // Highlight nav link on click
  navLinks.forEach((a) => {
    a.addEventListener("click", () =>
      setActive(a.getAttribute("href").slice(1))
    );
  });

  // IntersectionObserver for scroll-based active link
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible && visible.target && visible.target.id) {
        setActive(visible.target.id);
      }
    },
    {
      root: null,
      rootMargin: `-${HEADER_HEIGHT + 20}px 0px -55% 0px`,
      threshold: [0.25, 0.5, 0.75, 1],
    }
  );

  sections.forEach((sec) => observer.observe(sec));
});

// ------------------------------
// Mobile Menu Toggle
// ------------------------------
const menuBtn = document.getElementById("menu-btn");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("mobile-nav-open"); // Toggle mobile nav
});

// Smooth scroll & close mobile menu on nav link click
document.querySelectorAll("#main-nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
    header.classList.remove("mobile-nav-open"); // Close mobile menu
  });
});

// ------------------------------
// Optional: Custom Rotation Animation (commented out)
// ------------------------------
// tailwind.config.theme.extend.keyframes.rotatey = {
//   "0%": { transform: "rotateY(0deg)" },
//   "50%": { transform: "rotateY(180deg)" },
//   "100%": { transform: "rotateY(360deg)" },
// };
// tailwind.config.theme.extend.animation.rotate = "rotatey 10s linear infinite";
