const navbar = document.getElementById("navbar");
const currentPage = document.body.dataset.page || "home";

const navLinks = [
  { key: "home", href: "./index.html", label: "Home" },
  { key: "gallery", href: "./gallery.html", label: "Gallery" },
  { key: "contact", href: "./contact.html", label: "Contact" }
];

const desktopLinks = navLinks
  .map((link) => `<a href="${link.href}" class="site-nav__link ${currentPage === link.key ? "site-nav__link--active" : ""}">${link.label}</a>`)
  .join("");

const mobileLinks = navLinks
  .map((link) => `<a href="${link.href}" class="site-nav__mobile-link ${currentPage === link.key ? "site-nav__mobile-link--active" : ""}">${link.label}</a>`)
  .join("");

if (navbar) {
  navbar.innerHTML = `
    <header id="siteHeader" class="site-header fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="site-header__shell flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-[#0f172a]/72 px-4 py-3 shadow-[0_18px_50px_rgba(2,6,23,0.28)] backdrop-blur-xl transition duration-300">
          <a href="./index.html" class="inline-flex items-center gap-3">
            <img src="./docs/assets/logo.png" alt="Premier Realty Group Platinum logo" class="md:h-20 h-16 w-auto rounded-xl" />
          </a>

          <nav class="hidden items-center gap-2 lg:flex">
            ${desktopLinks}
          </nav>

          <div class="hidden items-center gap-3 lg:flex">
            <a href="tel:2106411400" class="site-nav__cta inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-[#f5ddae]">
              <i class="fa-solid fa-phone"></i>
              Call Office
            </a>
          </div>

          <button id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false" class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition hover:bg-white/12 lg:hidden">
            <i class="fa-solid fa-bars-staggered text-sm"></i>
          </button>
        </div>
      </div>

      <div id="mobileMenu" aria-hidden="true" class="site-mobile-menu lg:hidden">
        <div class="site-mobile-menu__panel">
          <div class="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <a href="./index.html" class="inline-flex items-center gap-3">
              <img src="./docs/assets/favicon.png" alt="Premier Realty Group Platinum logo" class="h-12 w-auto rounded-xl" />
            </a>
            <button id="mobileCloseBtn" type="button" aria-label="Close menu" class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-900 transition hover:bg-slate-200">
              <i class="fa-solid fa-xmark text-base"></i>
            </button>
          </div>

          <div class="mt-8 flex flex-col gap-2">
            ${mobileLinks}
          </div>

          <div class="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Serious Inquiries Only</p>
            <p class="mt-3 text-sm leading-7 text-slate-600">For property details, showings, and offer guidance, contact Premier Realty Group Platinum directly.</p>
            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <a href="tel:2106411400" class="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-4 py-3 text-sm font-semibold text-white transition hover:bg-black">
                <i class="fa-solid fa-phone"></i>
                Kathleen
              </a>
              <a href="tel:9565566279" class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                <i class="fa-solid fa-phone"></i>
                Jennifer
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}
