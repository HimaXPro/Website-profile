// Main JS

document.addEventListener('DOMContentLoaded', () => {
    // Current Page Active Link Handling
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Optional: Animate hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            if (spans.length === 3) {
                spans[0].style.transform = nav.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
                spans[1].style.opacity = nav.classList.contains('active') ? '0' : '1';
                spans[2].style.transform = nav.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
            }
        });
    }

    // Close menu when a link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            if (spans.length === 3) {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Form Simulation
    const form = document.getElementById('applicationForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation visualization
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Mengirim...';
            btn.disabled = true;

            // Simulate server request time
            setTimeout(() => {
                alert('Lamaran Anda telah berhasil dikirim! Silakan tunggu pengumuman selanjutnya di halaman Karier/Pengumuman.');
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;

                // Optional: Redirect to Home or Announcement page
                // window.location.href = 'index.html';
            }, 1500);
        });
    }
});
