// const activePage = window.location.pathname;
// const navLink = document.querySelectorAll('.deskLink').forEach(link => {
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active');
//     }
// })
const activePage = window.location.pathname;
document.querySelectorAll('.deskLink').forEach(link => {
    if(link.pathname === activePage) {
        link.classList.add('active');
    }
});
// const activePage = window.location.pathname;
// document.querySelectorAll('.deskLink').forEach(link => {
//     if(link.href.includes(activePage)) {
//         link.classList.add('active');
//     }
// });