const tl = gsap.timeline();
tl.from(".hero-title",{
    x:-200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".hero-title",
        scroller:"body"
    }
}).from(".hero-subtitle",{
    y:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".hero-subtitle",
        scroller:"body"
    }
},"-=1").from(".hero-author",{
    y:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".hero-author",
        scroller:"body"
    }
},"-=1").from(".hero-nav",{
    y:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".hero-nav",
        scroller:"body"
    }
},"-=1")
gsap.from("#precision-nutrition .section-title",{
        y:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:"#precision-nutrition .section-title",
        scroller:"body",
    }
})
gsap.from("#precision-nutrition .section-description",{
        y:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:"#precision-nutrition .section-description",
        scroller:"body",

    }
})
gsap.from("#precision-nutrition .feature-card",{
    x:-300,
    opacity:0,
    duration:0.4,
    delay:0.2,
    ease:"none",
    scrollTrigger:{
        trigger:"#precision-nutrition .feature-card",
        scroller:"body",
        start:"top 70%",
    }
})