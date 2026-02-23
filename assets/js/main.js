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
