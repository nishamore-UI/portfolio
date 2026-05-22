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

/* Scroll Reveal */

window.addEventListener("scroll", revealSections);

function revealSections() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}

/* Typing Effect */

const texts = [
    "Python Backend Developer",
    "Flask & REST API Developer",
    "SQL & Database Enthusiast",
    "Building Scalable Backend Systems"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {
            erase();
        }, 1500);

    } else {

        setTimeout(type, 100);

    }

}

function erase() {

    letter = currentText.slice(0, --index);

    document.getElementById("typing-text").textContent = letter;

    if (letter.length === 0) {

        count++;
        setTimeout(type, 300);

    } else {

        setTimeout(erase, 50);

    }

}

type(); 