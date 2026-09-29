document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const form = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add a little button animation
            const btn = form.querySelector('button[type="submit"]');
            btn.textContent = 'Processing...';
            btn.style.opacity = '0.8';

            // Simulate API call
            setTimeout(() => {
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
            }, 1000);
        });
    }

    // Set minimum date to today for the booking form
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});
