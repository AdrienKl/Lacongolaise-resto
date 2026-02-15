window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 50px';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.padding = '20px 50px';
        navbar.style.background = '#fff';
    }
});