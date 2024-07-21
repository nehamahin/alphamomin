const slideContainer = document.getElementById("slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");

const slides = [
    {
        id: "0",
        title: "Travel & Accommodation",
        description:
            "We help you get the best deals while providing assistance for TSA Pre-check, Global Entry, Flight Bookings, Hotel Accommodations, Airbnb Bookings, Canada Visit Visa Applications and more",
        image: "assets/images/travel-and-accommodation.jpg",
        link: "",
    },
    {
        id: "1",
        title: "Education & Career",
        description:
            "We offer guidance and a dedicated support in CPT/OPT Application Process, University Transfers, STEM Extension and more",
        image: "assets/images/education-and-career.jpg",
        link: "",
    },
    {
        id: "2",
        title: "Financial Services",
        description:
            "We provide assistance in Traffic Ticket Transfers, Car Financing, Banking, Credit Score Management, Pay Traffic Violation and more",
        image: "assets/images/financial-services.jpg",
        link: "",
    },
    {
        id: "3",
        title: "Property & Registration",
        description:
            "Your go-to for Rental Properties across Chicago and closer surburbs, LLC and Corporation registration, and Special & Custom License Plates",
        image: "assets/images/property-registration.jpg",
        link: "",
    },
];

let currentSlide = 0;

const addSlide = (slideSelected) => {
    let html = `<div class="slide-content">
                    <h2>${slideSelected.title}</h2>
                    <p>${slideSelected.description}</p>
                </div>
                <a class="slide" href=${slideSelected.link}>
                    <img src=${slideSelected.image} alt=${slideSelected.title}/>
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
