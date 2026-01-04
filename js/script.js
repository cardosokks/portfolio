const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.getElementsByClassName('nav-link');

menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuToggle.textContent = '✕'; 
    } else {
        menuToggle.textContent = '☰';
    }
});


for (let item of navLinkItems) {
    item.addEventListener('click', function () {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
    });
}

function scrollToComponent(tagName) {
    const el = document.querySelector(tagName);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
