const navbar = document.querySelector('.nav-menu');
const ToggleEvent = document.querySelector('.toggle-nav');
ToggleEvent.addEventListener('click', (e) => {
    navbar.classList.toggle('active');
})
// colne node
const node = document.querySelector('.rotating-logo').cloneNode(true);
document.querySelector('.rotating-logo-container').appendChild(node);     