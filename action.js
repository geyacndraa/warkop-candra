// JavaScript yang diperbaiki untuk menu mobile
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        // Fungsi untuk toggle menu
        function toggleMenu(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Menu toggled'); // Untuk debugging
            mainNav.classList.toggle('active');
        }

        // Event listeners yang lebih kompatibel
        menuToggle.addEventListener('click', toggleMenu);
        menuToggle.addEventListener('touchend', toggleMenu, { passive: false });
        
        // Alternatif jika masih tidak bekerja
        menuToggle.addEventListener('mousedown', toggleMenu);
    }

    // Navigation functionality (tidak berubah)
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(function(l) {
                l.classList.remove('active', 'home-active');
            });
            contentSections.forEach(function(s) {
                s.classList.remove('active');
            });
            
            // Add active class to clicked link
            if (link.dataset.section === 'home') {
                link.classList.add('home-active');
            } else {
                link.classList.add('active');
            }
            
            // Show corresponding section
            const targetSection = document.getElementById(link.dataset.section);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Close mobile menu
            if (mainNav) {
                mainNav.classList.remove('active');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Close mobile menu when clicking/touching outside
    function closeMenuOutside(e) {
        if (menuToggle && mainNav && 
            !menuToggle.contains(e.target) && 
            !mainNav.contains(e.target)) {
            mainNav.classList.remove('active');
        }
    }

    document.addEventListener('click', closeMenuOutside);
    document.addEventListener('touchend', closeMenuOutside);
});