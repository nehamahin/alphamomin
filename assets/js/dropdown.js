const main = document.getElementById("dropdown-main");
const listItems = document.querySelectorAll("li[data-item-id]");

const servicesList = [
    "TSA PreCheck Application Assistance",
    "Global Entry Application Assistance",
    "Flight Booking Assistance",
    "Hotel Accommodation Assistance",
    "Rental Property Assistance",
    "LLC/Corp Registration Assistance",
    "Special/Custom License Plates Application",
    "Pay Traffic Violation Assistance",
    "Traffic Ticket Transfers",
    "University Transfer Assistance",
    "CPT/OPT Application Assistance",
    "STEM Extension Application Assistance",
    "Visa Applications for Canada Assistance",
    "Bank Account Setup Assistance",
    "Car Financing Assistance",
    "Credit Score Assistance",
    "Website Development and Support",
];

main.addEventListener("click", () => {
    main.classList.toggle("active");

    if (main.classList.contains("active")) {
        listItems.forEach((e) =>
            e.addEventListener("click", (item) => {
                const val =
                    servicesList[item.target.getAttribute("data-item-id")];
                main.innerHTML = val;
                main.classList.remove("active");
            })
        );
    }
});

console.log(main.classList.contains("active"));
