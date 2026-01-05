gsap.registerPlugin(ScrollTrigger);
gsap.set([".hero-title",".hero-subtitle",".hero-author",".hero-nav"],{visibility:"visible"})
const tl = gsap.timeline();
tl.from(".hero-title",{
    x:-200,
    opacity:0,
    duration:1,
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
gsap.from("#msg", {
    scale:0.1,
  opacity: 0,
  duration: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#msg",
    start: "top 80%",
    once: true
  }
});

gsap.from("#precision-nutrition .section-title-alt",{
        y:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:"#precision-nutrition",
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
    opacity:0,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#precision-nutrition",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})
gsap.from("#msg2", {
    scale:0.1,
  opacity: 0,
  duration: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#msg2",
    start: "top 80%",
    once: true
  }
});

gsap.from("#personalized-nutrition .section-title-alt",{
        y:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:"#personalized-nutrition",
        scroller:"body",
    }
})
gsap.from("#personalized-nutrition .section-text",{
        y:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:"#personalized-nutrition .section-text",
        scroller:"body",

    }
})
gsap.from("#personalized-nutrition .image-column",{
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:"#personalized-nutrition",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})
gsap.from(".features-grid-alt .feature-card-alt",{
    scale:0.1,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".features-grid-alt",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }

})

gsap.from("#key-differences .section-title", {
    x:-200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger: {
    trigger: "#key-differences",
   scroller:"body",
        start:"top 70%",
  }
});

gsap.from("#key-differences .comparison-table-row",{
    opacity:0,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#key-differences .comparison-card",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})
gsap.from("#supershyft-precision .section-title", {
    x:-200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger: {
    trigger: "#supershyft-precision",
    start: "top 80%",
    once: true
  }
});
gsap.from("#supershyft-precision .section-description", {
    x:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger: {
    trigger: "#supershyft-precision",
    start: "top 80%",
    once: true
  }
});
gsap.from("#supershyft-precision .checklist-item",{
     x:-200,
    opacity:0,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#supershyft-precision .checklist-container",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})
gsap.from("#why-matters .section-title", {
    x:-200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger: {
    trigger: "#why-matters",
    start: "top 80%",
    once: true
  }
});
gsap.from("#why-matters .section-description", {
    x:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger: {
    trigger: "#why-matters",
    start: "top 80%",
    once: true
  }
});
gsap.from("#why-matters-grid ",{
    opacity:0,
    x:-300,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#why-matters-grid",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})
gsap.from(".questions-card .questions-title",{
    opacity:0,
    x:-300,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".questions-card",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})
gsap.from(".questions-list .questions-item",{
    opacity:0,
    x:300,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".questions-list",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})
 
gsap.from("#blending-worlds .section-title", {
    x:-200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger: {
    trigger: "#blending-worlds",
    start: "top 80%",
    once: true
  }
});
gsap.from("#blending-worlds .section-description", {
    x:200,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger: {
    trigger: "#blending-worlds",
    start: "top 80%",
    once: true
  }
});
gsap.from('.blending-image-container',{
    opacity:0,
    x:-300,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".blending-image-container",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})
gsap.from('#blending-worlds-cards',{
    opacity:0,
    scale:0.2,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#blending-worlds-cards",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})

gsap.from(".hybrid-quote-banner",{
    opacity:0,
    y:-300,
    duration:1,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".hybrid-quote-banner",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // scrub:true
    }
})

gsap.from("#summary .summary-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#summary .summary-title",
        scroller: "body",
        start: "top 85%",
    }
});

gsap.from("#summary .summary-item", {
    x: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#summary .summary-list",
        scroller: "body",
        start: "top 80%",
    }
});

gsap.from(".final-thoughts-container .section-title", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".final-thoughts-container",
        scroller: "body",
        start: "top 80%",
    }
});

gsap.from(".final-thoughts-container .checklist-item", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".final-thoughts-container .checklist-container",
        scroller: "body",
        start: "top 85%",
    }
});

gsap.from("#topics #header h2", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#topics #header",
        scroller: "body",
        start: "top 85%",
    }
});

gsap.from("#topics #header button", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
        trigger: "#topics #header",
        scroller: "body",
        start: "top 85%",
    }
});

gsap.from("#handpicked .section-title", {
    x: -30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#handpicked",
        scroller: "body",
        start: "top 85%",
    }
});

gsap.from("#handpicked .topic-card", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#handpicked .grid",
        scroller: "body",
        start: "top 85%",
    }
});

gsap.from("#similar .section-title", {
    x: -30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#similar",
        scroller: "body",
        start: "top 85%",
    }
});

gsap.from("#similar .topic-card", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#similar .grid",
        scroller: "body",
        start: "top 85%",
    }
});

gsap.from(".footer-container > div", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 95%",
    }
});