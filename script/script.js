// ===== Theme =====

const themeToggle = document.querySelector('.theme-switch-input');

if (document.documentElement.getAttribute('data-theme') === 'dark') {
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// ===== Slider =====

const slides = document.querySelectorAll('.slider-list-item');
const controls = document.querySelectorAll('.slider-control');
const prevButton = document.querySelector('.left-arrow');
const nextButton = document.querySelector('.right-arrow');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    controls.forEach((control) => {
        control.removeAttribute('aria-current');
    });
    controls[index].setAttribute('aria-current', 'true');

    currentIndex = index;
}

function showNextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }
    showSlide(nextIndex);
}

function showPrevSlide() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = slides.length - 1;
    }
    showSlide(prevIndex);
}

if (slides.length > 0) {
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    controls.forEach((control, index) => {
        control.addEventListener('click', () => {
            showSlide(index);
        });
    });
}