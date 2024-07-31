const slideContainer = document.getElementById("slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");

const slides = [
    {
        id: "0",
        title: "Travel & Accommodation",
        description:
            "We help you get the best deals while providing assistance for TSA Pre-check, Global Entry, Flight Bookings, Hotel Accommodations, Airbnb Bookings, Canada Visit Visa Applications, Rental Properties across Chicago and closer suburbs and more",
        image: "assets/images/travel-and-accommodation",
        link: "",
    },
    {
        id: "1",
        title: "Academic Administration",
        description:
            "We offer guidance and a dedicated support in CPT/OPT Application Process, University Transfers, STEM Extension and more",
        image: "assets/images/education-and-career",
        link: "",
    },
    {
        id: "2",
        title: "Financial & Credit Management",
        description:
            "Consult with us for tailored advice and assistance in managing your bank accounts, for expert car financing solutions, and for professional credit score assistance.",
        image: "assets/images/financial-services",
        link: "",
    },
    {
        id: "3",
        title: "Legal & Administrative Registrations",
        description:
            "Consult with us for comprehensive LLC/Corp registration services, for obtaining special/custom license plates, for streamlined traffic violation payment services, and for efficient traffic ticket transfer services.",
        image: "assets/images/llc-corp-registration",
        link: "",
    },
    {
        id: "4",
        title: "Web Solutions",
        description:
            "Receive expert assistance in developing, maintaining, and optimizing your website to enhance your online presence and business operations. Ensure your website is functional, user-friendly, and optimized for performance to attract and retain customers. Consult with us for comprehensive website development and support services.",
        image: "assets/images/webdesigning-maintenance",
        link: "",
    },
];

let currentSlide = 0;

const addSlide = (slideSelected) => {
    let html = `<div class="slide-content">
                    <h2 class="pageYTransition">${slideSelected.title}</h2>
                    <p  class="pageYTransition">${slideSelected.description}</p>
                </div>
                <a class="slide" href=${slideSelected.link}>
                <img srcset="${slideSelected.image}-sm.jpg 600w, ${slideSelected.image}-m.jpg 1000w"
                    sizes="(max-width: 40.625em) 100vw, (min-width: 40.626em) 1000px"
                    src="${slideSelected.image}-m.jpg" alt="${slideSelected.title}">
                </a>`;

    slideContainer.insertAdjacentHTML("beforeend", html);
};

const viewController = (slideNum) => {
    //clear container
    slideContainer.innerHTML = "";

    //setSlide
    addSlide(slides[slideNum]);
};

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentSlide <= 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide > 0) {
        currentSlide -= 1;
    }
    viewController(currentSlide);
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentSlide < slides.length - 1 || currentSlide === 0) {
        currentSlide += 1;
    } else {
        currentSlide = 0;
    }
    viewController(currentSlide);
});

window.onscroll = () => {
    const services = document.getElementById("services");
    const servicesHead = document.querySelector(".services-head");
    const servicesCards = document.querySelector(".cards");
    const webSolutions = document.querySelector(".web-solutions");

    let coords = services.getBoundingClientRect();

    if (coords.y <= 390 && coords.y > 288) {
        servicesHead.classList.add("pageXTransition");
        servicesCards.classList.add("pageYTransition");
        webSolutions.classList.add("pageYTransition");
    }
};
