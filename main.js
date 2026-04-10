document.addEventListener('DOMContentLoaded', () => {
    // Interactive Chips
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
        });
    });

    // Form Submission Simulation
    const form = document.querySelector('#accessForm');
    const statusMsg = document.querySelector('#formStatus');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Transmitting...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
                statusMsg.style.display = 'block';
                form.querySelector('input').value = '';
                
                setTimeout(() => {
                    statusMsg.style.display = 'none';
                }, 4000);
            }, 1500);
        });
    }

    // Gentle scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
