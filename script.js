// --- 1. ПЕРЕМИКАЧ ТЕМ ---
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', function() {
    // Перемикаємо клас 'dark-theme' на тегу body
    bodyElement.classList.toggle('dark-theme');
    
    // Змінюємо текст кнопки залежно від активної теми
    if (bodyElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Повернутися до світла (Полуниця у лютому)';
    } else {
        themeToggleBtn.textContent = 'Mea Maxima Culpa (Увімкнути темряву)';
    }
});

// --- 2. СЛАЙДЕР ЗОБРАЖЕНЬ ПО КОЛУ ---
const slides = [
    "images/kupiansk1.jpg", 
    "images/kupiansk2.jpg", 
    "images/kupiansk3.jpg"
];

let currentSlideIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateSlider() {
    sliderImage.src = slides[currentSlideIndex];
}

nextBtn.addEventListener('click', function() {
    // Гортаємо вперед.
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener('click', function() {
    // Гортаємо назад. 
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    updateSlider();
});
// --- 3. МАГІЧНИЙ ВОГНИК ЗА КУРСОРМ ---
const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', function(e) {
    // Отримуємо координати мишки і передаємо їх нашому вогнику
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});