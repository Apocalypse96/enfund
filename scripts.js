// Menu toggle with smooth animation
const toggleBtn = document.querySelector('.toggle-menu');
const leftMenu = document.querySelector('.left-menu');

toggleBtn.addEventListener('click', () => {
    leftMenu.classList.toggle('collapsed');
    gsap.from(leftMenu, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Smooth entrance animations for cards
gsap.from('.card', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power2.out'
});

// Welcome message animation
gsap.from('.welcome-message', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

// Menu items hover animation
gsap.utils.toArray('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});
