// ACTIVE NAVIGATION STATE

// const navLinkEls = document.querySelectorAll('.nav__link');

// navLinkEls.forEach(navLinkEl => {
//     navLinkEl.addEventListener('click', () => {
//         document.querySelector('.active')?.classList.remove('active');
//         navLinkEl.classList.add('active');
//     });
// });

gsap.registerPlugin(ScrollTrigger);

gsap.from('.logo img',{
    opacity:0,
    delay:1,
    x:20
})



const menu_items = document.querySelector('nav')
gsap.from(menu_items.children ,{
    opacity:0,
    x:0,
    duration:1,
    delay:1.5,
    stagger:{
        amount:1
    }
})

gsap.from('.arrow-image',{
    opacity:0,
    delay:2,
    x:-20
})

gsap.from('.hero-image',{
    opacity:0,
    delay:2,
    x:20,
    scrollTrigger:".hero-image"
})

gsap.from('.second-part-section-1-a',{
    opacity:0,
    delay:2.5,
    x: -20,
    scrollTrigger:".second-part-section-1-a"
})

gsap.from('.second-part-section-1-b',{
    opacity:0,
    delay:2.5,
    x:20,
    scrollTrigger:".second-part-section-1-b"

})

gsap.from('.section-2-header',{
    opacity:0,
    delay:3,
    duration:2,
    x:100,
    scrollTrigger:".second-part-section-1-b"
})

gsap.from('.section-2-event-box-a',{
    opacity:0,
    delay:1,
    duration:2,
    x:-1000,
    scrollTrigger:'.section-2-header'
})


gsap.from('.section-2-event-box-b',{
    opacity:0,
    delay:1,
    duration:2,
    y:100,
    scrollTrigger:'.section-2-header'
})

gsap.from('.section-2-event-box-c',{
    opacity:0,
    delay:1,
    duration:2,
    x:500,
    scrollTrigger:'.section-2-header'
})

gsap.from('.grid-1',{
    opacity:0,
    delay:-1,
    duration:2,
    x:-500,
    scrollTrigger:'.grid-1'
})

gsap.from('.grid-6 ',{
    opacity:0,
    delay:1,
    duration:2,
    y:500,
    scrollTrigger:'.grid-1'
})

gsap.from('.grid-2',{
    opacity:0,
    delay:1,
    duration:3,
    y:50,
    scrollTrigger:'.grid-1'
})

gsap.from('.grid-3',{
    opacity:0,
    delay:1,
    duration:3,
    y:50,
    scrollTrigger:'.grid-1'
})

gsap.from('.grid-4',{
    opacity:0,
    delay:1,
    duration:3,
    y:50,
    scrollTrigger:'.grid-1'
})

gsap.from('.grid-5',{
    opacity:0,
    delay:1,
    duration:2,
    y:-100,
    x:100,
    scrollTrigger:'.grid-1'
})

gsap.from('.grid-7',{
    opacity:0,
    delay:1,
    duration:2,
    y:100,
    scrollTrigger:'.grid-1'
})

gsap.from('.grid-8',{
    opacity:0,
    delay:1,
    duration:2,
    x:100,
    scrollTrigger:'.grid-1'
})

gsap.from('footer',{
    opacity:0,
    delay:-1,
    duration:4,
    y:100,
    scrollTrigger:'footer'
})





  



// gsap.utils.toArrays('.leftAnimation').forEach(title=>{
//     gsap.fromTo(title,{
//         opacity:0,
//         x:-300
//     },{
//         opacity:1,
//         x:0,
//         duration:1,
//         delay:6.5,
//         scrollTrigger:title
//     })
// })