let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Initialize total slides counter
document.getElementById('totalSlides').textContent = totalSlides;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    
    document.getElementById('currentSlide').textContent = currentSlide + 1;
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Add event listeners to buttons
document.getElementById('prevBtn').addEventListener('click', function() {
    changeSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    changeSlide(1);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        changeSlide(e.key === 'ArrowRight' ? 1 : -1);
    }
});

// Initialize
showSlide(0);