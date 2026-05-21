let currentSlide = 0;
let slides, dots;
let slideInterval;

document.addEventListener("DOMContentLoaded", function () {
    slides = document.querySelectorAll(".slide");
    dots = document.querySelectorAll(".dot");

    showSlide(currentSlide);

    // start auto slide
    startSlider();

    // pause on hover
    const slider = document.querySelector(".slider");

    slider.addEventListener("mouseenter", stopSlider);
    slider.addEventListener("mouseleave", startSlider);
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");

        if (i === index) {
            slide.classList.add("active");
            dots[i].classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 3000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}