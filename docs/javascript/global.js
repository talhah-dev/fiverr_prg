document.addEventListener("DOMContentLoaded", () => {
  if (window.Lenis) {
    new Lenis({ autoRaf: true, smoothWheel: true });
  }

  const siteHeader = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");
  const toTopBtn = document.getElementById("toTopBtn");
  const videoTriggers = Array.from(document.querySelectorAll(".video-lightbox-trigger"));

  const syncHeader = () => {
    if (!siteHeader) return;
    if (window.scrollY > 18) {
      siteHeader.classList.add("is-scrolled");
    } else {
      siteHeader.classList.remove("is-scrolled");
    }
  };

  const closeMenu = () => {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.setAttribute("aria-expanded", "true");
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  };

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      if (isOpen) closeMenu();
      else openMenu();
    });

    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener("click", closeMenu);
    }

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) closeMenu();
    });
  }

  if (toTopBtn) {
    const toggleToTop = () => {
      if (window.scrollY > 360) {
        toTopBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        toTopBtn.classList.add("opacity-100", "translate-y-0");
      } else {
        toTopBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        toTopBtn.classList.remove("opacity-100", "translate-y-0");
      }
    };

    window.addEventListener("scroll", toggleToTop, { passive: true });
    toggleToTop();

    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  if (window.AOS) {
    AOS.init({ once: true, duration: 850, easing: "ease-out-cubic", offset: 40 });
  }

  if (videoTriggers.length) {
    const modal = document.createElement("div");
    modal.className = "video-lightbox-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="video-lightbox-modal__dialog" role="dialog" aria-modal="true" aria-label="Property video viewer">
        <button type="button" class="video-lightbox-modal__close" aria-label="Close video viewer">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <video class="video-lightbox-modal__video" controls playsinline preload="metadata"></video>
      </div>
    `;
    document.body.appendChild(modal);

    const modalVideo = modal.querySelector(".video-lightbox-modal__video");
    const modalClose = modal.querySelector(".video-lightbox-modal__close");

    const closeVideoModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("video-lightbox-open");
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.removeAttribute("src");
        modalVideo.removeAttribute("poster");
        modalVideo.load();
      }
    };

    const openVideoModal = (src, poster = "") => {
      if (!modalVideo || !src) return;
      modalVideo.src = src;
      if (poster) {
        modalVideo.poster = poster;
      }
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("video-lightbox-open");
      const playPromise = modalVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    videoTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        openVideoModal(trigger.dataset.videoSrc || "", trigger.dataset.videoPoster || "");
      });
    });

    if (modalClose) {
      modalClose.addEventListener("click", closeVideoModal);
    }

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeVideoModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeVideoModal();
      }
    });
  }
});
