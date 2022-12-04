let thankSection = document.querySelector(".thank-section");
let rateSection = document.querySelector(".rate-section");
let submitBtns = document.getElementsByClassName("submit");
let rates = document.querySelectorAll(".rating li");
let rateNumMessage = document.querySelector(".rate-from-5");

// Toggle Classes
for (let i = 0; i < submitBtns.length; i++) {
    submitBtns[i].addEventListener("click", () => {
        thankSection.classList.toggle("hidden");
        rateSection.classList.toggle("hidden");
    });
}

// Rating
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        for (let i = 0; i < rates.length; i++) {
            rates[i].removeAttribute("class");
        }
        rate.className = "active";
        rateNumMessage.textContent = rate.textContent;
    });
});
