let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
