// Menu Toggle untuk Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu saat tombol diklik
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Tutup menu saat link diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Share buttons functionality
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const platform = btn.textContent;
        const articleTitle = document.querySelector('.article-content h1')?.textContent || 'Artikel';
        const pageUrl = window.location.href;
        
        if (platform === 'Copy Link') {
            navigator.clipboard.writeText(pageUrl);
            btn.textContent = 'Link Disalin!';
            setTimeout(() => {
                btn.textContent = 'Copy Link';
            }, 2000);
        }
        // Add share functionality for other platforms as needed
    });
});

// Animasi pada saat scroll untuk related articles
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Amati related cards untuk animasi
const relatedCards = document.querySelectorAll('.related-card');
relatedCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});