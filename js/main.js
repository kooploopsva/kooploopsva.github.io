document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

const setupMobileMenu = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (isMobile) {
    }
};

window.addEventListener('load', setupMobileMenu);
window.addEventListener('resize', setupMobileMenu);

document.querySelectorAll('audio').forEach(audioElement => {
    audioElement.addEventListener('play', () => {
        document.querySelectorAll('audio').forEach(otherAudio => {
            if (otherAudio !== audioElement && !otherAudio.paused) {
                otherAudio.pause();
            }
        });
    });
});
