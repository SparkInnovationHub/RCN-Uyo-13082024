const activePage = window.location.pathname;
const navLink = document.querySelectorAll('.deskLink').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})