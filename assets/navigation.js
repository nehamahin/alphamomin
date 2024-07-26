const mobileNav = document.getElementById("mobile-nav");
const closeNav = document.getElementById("mobile-nav__close");
const menuNavBtn = document.getElementById("mobile-menu");
const allMobileNavItems = document.querySelectorAll(".mobile-nav__menu--item");

const toggleMobileNav = () => {
    mobileNav.classList.toggle("active");
};

if (menuNavBtn || closeNav) {
    menuNavBtn.addEventListener("click", () => toggleMobileNav());
    closeNav.addEventListener("click", () => toggleMobileNav());
}

allMobileNavItems.forEach((navlink) => {
    navlink.addEventListener("click", () => toggleMobileNav());
});

document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !menuNavBtn.contains(e.target)) {
        toggleMobileNav();
    }
});
