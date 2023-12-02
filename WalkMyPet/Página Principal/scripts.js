document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Clique no botão Login!');
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});