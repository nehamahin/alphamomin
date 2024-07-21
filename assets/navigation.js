const mobileNav = document.getElementById("mobile-nav");
const closeNav = document.getElementById("mobile-nav__close");
const menuNavBtn = document.getElementById("mobile-menu");
const allMobileNavItems = document.querySelectorAll(".mobile-nav__menu--item");

const closeMobileNav = () => {
    mobileNav.style.transform = "translateX(100%)";
    setTimeout(() => {
        mobileNav.classList.remove("active");
    }, 1000);
};

if (mobileNav) {
    closeNav.addEventListener("click", (e) => {
        if (
            e.target.parentNode.classList.contains("mobile-nav__close--svg") ||
            e.target.parentNode.id === "mobile-nav__close"
        ) {
            closeMobileNav();
        }
    });
}

if (menuNavBtn) {
    menuNavBtn.addEventListener("click", (e) => {
        if (
            e.target.parentNode.classList.contains("mobile-menu__svg") ||
            e.target.parentNode.id === "mobile-menu"
        ) {
            mobileNav.classList.add("active");
            setTimeout(() => {
                mobileNav.style.transform = "translateX(0%)";
            }, 100);
        }
    });
}

allMobileNavItems.forEach((navlink) => {
    navlink.addEventListener("click", (e) => {
        if (
            e.target.parentNode.classList.contains("mobile-nav__menu--item") ||
            e.target.parentNode.classList.contains("item")
        ) {
            closeMobileNav();
        }
    });
});
/******** MOBILE NAV FUNCTIONALITY ENDS HERE ******* */
