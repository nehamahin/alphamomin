const slideContainer = document.getElementById("slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");

const slides = [
    {
        id: "0",
        title: "Travel & Accommodation",
        description:
            "We help you get the best deals while providing assistance for TSA Pre-check, Global Entry, Flight Bookings, Hotel Accommodations, Airbnb Bookings, Canada Visit Visa Applications, Rental Properties across Chicago and closer surburbs and more",
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
            "We provide assistance in Car Financing, Banking, Credit Score Assistance and more",
        image: "assets/images/financial-services",
        link: "",
    },
    {
        id: "3",
        title: "Legal & Administrative Registrations",
        description:
            "LLC/Corporation registration, Special/Custom License Plates, Pay Traffic Violation, Traffic Ticket Transfers etcetera",
        image: "assets/images/llc-corp-registration",
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
                    <img srcset="${slideSelected.image}-sm.jpg 300w, ${slideSelected.image}-m.jpg 1000w, ${slideSelected.image}.jpg 1800w" sizes="(max-width: 40.6em) 100vw, (max-width: 64.25em) 100vw, 100vw" src=${slideSelected.image} alt=${slideSelected.title}/>
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

    let coords = services.getBoundingClientRect();

    if (coords.y <= 390 && coords.y > 288) {
        servicesHead.classList.add("pageXTransition");
        servicesCards.classList.add("pageYTransition");
    } else if (coords.y > 390) {
        servicesHead.classList.remove("pageXTransition");
        servicesCards.classList.remove("pageYTransition");
    }
};
