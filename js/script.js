// // ACTIVE NAVIGATION STATE

// // const navLinkEls = document.querySelectorAll('.nav__link');

// // navLinkEls.forEach(navLinkEl => {
// //     navLinkEl.addEventListener('click', () => {
// //         document.querySelector('.active')?.classList.remove('active');
// //         navLinkEl.classList.add('active');
// //     });
// // });

// gsap.registerPlugin(ScrollTrigger)
// gsap.from('.logo img',{
//     opacity:0,
//     delay:1,
//     x:20
// })

// const menu_items = document.querySelector('nav')
// gsap.from(menu_items.children ,{
//     opacity:0,
//     x:0,
//     duration:1,
//     delay:1.5,
//     stagger:{
//         amount:1
//     }
// })

// gsap.utils.toArray('.section-1 div').forEach(secdiv=>{
//     gsap.fromTo(secdiv, {
//         rotation:450,
//         opacity:0,
//         y:100,
//     },{
//         rotation:0,
//         opacity:1,
//         y:0,
//         duration:3,
//         delay:2.5,
//         scrollTrigger:secdiv
//     })
// })


// // gsap.utils.toArrays('.second-part-section-1-b p').forEach(title=>{
// //     gsap.fromTo(title,{
// //         letterSpacing:'10px',
// //         opacity:0,
// //         x:300,
// //         skewX:65
// //     },{
// //         letterSpacing:'0',
// //         opacity:1,
// //         x:0,
// //         skewX:0,
// //         duration:1,
// //         delay:6.5,
// //         scrollTrigger:title
// //     })
// // })