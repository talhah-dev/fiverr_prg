const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
    <footer class="bg-[#0f172a] text-white">
      <div class="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <img src="./docs/assets/logo.png" alt="Premier Realty Group Platinum logo" class="h-40 md:h-60 w-auto" />
            <p class="mt-5 max-w-md text-sm leading-7 text-white/68">
              Explore this ranch for sale in Hallettsville, Texas, presented by Premier Realty Group Platinum.
            </p>
          </div>

          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">Site Links</p>
            <div class="mt-5 flex flex-col gap-3 text-sm text-white/78">
              <a href="./index.html" class="transition hover:text-[#f5ddae]">Home</a>
              <a href="./houses-buildings.html" class="transition hover:text-[#f5ddae]">Houses & Buildings</a>
              <a href="./property-amenities.html" class="transition hover:text-[#f5ddae]">Property Amenities</a>
              <a href="./contact.html" class="transition hover:text-[#f5ddae]">Contact & Offer Instructions</a>
            </div>
          </div>

          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">Primary Office</p>
            <div class="mt-5 space-y-3 text-sm leading-7 text-white/74">
              <p>Premier Realty Group Platinum</p>
              <p>3415 Paesanos Pkwy<br />San Antonio, TX 78231</p>
              <a href="tel:2106411400" class="block transition hover:text-[#f5ddae]">Office: (210) 641-1400</a>
              <p>Fax: (888) 606-2040</p>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          <p>&copy; <span data-year></span> Premier Realty Group Platinum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
