const activePage = window.location.pathname;
document.querySelectorAll('.deskLink').forEach(link => {
    if(link.pathname === activePage) {
        link.classList.add('active');
    }
});
