document.addEventListener('scroll', function(event) {
    if (ul && !menu.contains(event.target)) {
        hideNavbar();
        }
});