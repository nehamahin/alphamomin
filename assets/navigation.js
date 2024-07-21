const mobileNav = document.getElementById("mobile-nav");
const closeNav = document.getElementById("mobile-nav__close");
const menuNavBtn = document.getElementById("mobile-menu");
const allMobileNavItems = document.querySelectorAll(".mobile-nav__menu--item");

const openMobileNav = () => {
    mobileNav.classList.add("active");
    mobileNav.style.transform = "translateX(0%)";
};

const closeMobileNav = () => {
    mobileNav.style.transform = "translateX(100%)";
    setTimeout(() => {
        mobileNav.classList.remove("active");
    }, 300);
};

if (menuNavBtn) {
    menuNavBtn.addEventListener("click", () => {
        openMobileNav();
    });
}

if (closeNav) {
    closeNav.addEventListener("click", () => {
        closeMobileNav();
    });
}

allMobileNavItems.forEach((navlink) => {
    navlink.addEventListener("click", () => {
        closeMobileNav();
    });
});

document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !menuNavBtn.contains(e.target)) {
        closeMobileNav();
    }
});
