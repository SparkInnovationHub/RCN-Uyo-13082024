// ACTIVE NAVIGATION STATE

// const navLinkEls = document.querySelectorAll('.nav__link');

// navLinkEls.forEach(navLinkEl => {
//     navLinkEl.addEventListener('click', () => {
//         document.querySelector('.active')?.classList.remove('active');
//         navLinkEl.classList.add('active');
//     });
// });

const numbers = [123, 25, 78, 5, 9];

// Filter numbers less than 10 and find their indexes
const indexes = numbers
    .map((num, index) => (num < 10 ? index : -1)) // Map indexes of numbers less than 10
    .filter(index => index !== -1); // Filter out -1 values to get the actual indexes

console.log(indexes); // Output: [3, 4]