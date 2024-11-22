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

// // gsap.utils.toArrays('sec').forEach(sec=>{
// //     gsap.fromTo(sec,{
// //         opacity:0
// //     },{
// //         opacity:0,
// //     delay:2.5,
// //     x:20,
// //         ScrollTrigger:sec
// //     })
// // })

// gsap.from('.arrow-image',{
//     opacity:0,
//     delay:2,
//     x:-20
// })

// gsap.from('.hero-image',{
//     opacity:0,
//     delay:2,
//     x:20
// })

// gsap.from('.second-part-section-1-a',{
//     opacity:0,
//     delay:2.5,
//     x: -20
// })

// gsap.from('.second-part-section-1-b',{
//     opacity:0,
//     delay:2.5,
//     x:20

// })

// gsap.from('.section-2-header',{
//     opacity:0,
//     delay:3,
//     duration:3,
//     x:1000
// })

// gsap.from('.section-2-event-box-a',{
//     opacity:0,
//     delay:3,
//     duration:3,
//     x:-1000,
//     ScrollTrigger:'.section-2-header'
// })


// gsap.from('.section-2-event-box-b',{
//     opacity:0,
//     delay:3,
//     duration:3,
//     y:1000,
//     ScrollTrigger:'.section-2-header'
// })

// gsap.from('.section-2-event-box-c',{
//     opacity:0,
//     delay:3,
//     duration:3,
//     x:1000,
//     ScrollTrigger:'.section-2-header'
// })

// // Set up ScrollTrigger

  



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