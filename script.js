// Smooth Scroll Active Effect

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {

        navLinks.forEach(nav => nav.classList.remove('active'));

        this.classList.add('active');
    });
});

console.log("Portfolio Website Loaded Successfully");