gsap.registerPlugin(ScrollTrigger);

gsap.from('.logo img',{
    opacity:0,
    delay:1,
    x:50
})



const menu_items = document.querySelector('nav')
gsap.from(menu_items ,{
    opacity:0,
    x:0,
    duration:1,
    delay:1.5,
    stagger:{
        amount:1
    }
})

// home page   header animation  
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

 // home page section_1 anim ation
gsap.from('.second-part-section-1-a',{
    opacity:0,
    delay:2.5,
    x: -20,
    scrollTrigger:".second-part-section-1-a"
})

gsap.from('.second-part-section-1-b',{
    opacity:0,
    delay:2.5,
    y:20,
    scrollTrigger:".second-part-section-1-b"

})

// home page section-2
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
    x:-100,
    scrollTrigger:'.section-2-header'
})


gsap.from('.section-2-event-box-b',{
    opacity:0,
    delay:1,
    duration:2,
    y:50,
    scrollTrigger:'.section-2-header'
})

gsap.from('.section-2-event-box-c',{
    opacity:0,
    delay:1,
    duration:2,
    x:100,
    scrollTrigger:'.section-2-header'
})

//home page section-3 animation
gsap.from('.grid-1',{
    opacity:0,
    delay:-1,
    duration:2,
    x:-50,
    scrollTrigger:'.grid-1'
})

gsap.from('.grid-6 ',{
    opacity:0,
    delay:1,
    duration:2,
    y:100,
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
    y:-50,
    x:50,
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
    x:50,
    scrollTrigger:'.grid-1'
})

//footer animation
gsap.from('footer',{
    opacity:0,
    delay:-1,
    duration:4,
    y:100,
    scrollTrigger:'footer'
})

//about page animation

gsap.from('.about-section-1 h1',{
    opacity:0,
    delay:1,
    duration:2,
    x:-50
})

gsap.from('.about-section-image-1',{
    opacity:0,
    delay:1,
    duration:2,
    x:50
})

gsap.from('.about-section-arrow-image',{
    opacity:0,
    delay:1,
    duration:2,
    x:-50,
    scrollTrigger:".about-section-image-1",
    
})

gsap.from('.about-section-1 div',{
    opacity:0,
    duration:2,
    x:100,
    scrollTrigger:".about-section-arrow-image"
})


gsap.from('.about-section-2',{
    opacity:0,
    delay:1,
    duration:1.5,
    y:50,
    scrollTrigger:".about-section-1 div"
})
gsap.from('.about-section-3-image-div',{
    opacity:0,
    duration:2,
    delay:4,
    scrollTrigger:".about-p"
})

gsap.utils.toArray('.about-p').forEach(interSec =>{
    gsap.from(interSec, {
        letterSpacing:20,
        opacity:0,
        duration:1.5,
        delay:1,
        y:50,
        scrollTrigger:interSec
    })
})

gsap.utils.toArray('.about-heading').forEach(heading => {
    gsap.fromTo(heading,{
        letterSpacing:10,
        opacity:0,
        y:50
    },  {
        letterSpacing:0,
        opacity:1,
        y:0,
        duration:1,
        delay:1,
        scrollTrigger:heading
    })
    
});

// Animation of infomation page
gsap.from('.info-section-1',{
    opacity:0,
    duration:7,
})

gsap.from('.info-section-2-first-div',{
    opacity:0,
    delay:2,
    x:-20
})

gsap.from('.info-section-2-second-div',{
    opacity:0,
    delay:2,
    duration:7,
    x:20
})

gsap.from('.info-section-2-second-div',{
    opacity:0,
    delay:2,
    x:50
})

gsap.from('.info-section-form',{
    opacity:0,
    duration:5,
    y:100,
    scrollTrigger:'.info-section-form'
})

//Animating Media page

gsap.from('.media-section-1',{
    opacity:0,
    duration:5,
    y:100,
    scrollTrigger:'.media-section-1'
})

//Animation of giving page
gsap.utils.toArray('.giving-sec').forEach(interSec =>{
    gsap.from(interSec, {
        letterSpacing:20,
        opacity:0,
        duration:1.5,
        delay:1,
        y:50,
        scrollTrigger:interSec
    })
})
