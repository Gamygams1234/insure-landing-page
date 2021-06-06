// Toggle Mobile Menu

// GSAP Animations
gsap.registerPlugin(ScrollTrigger)
const timeline = gsap.timeline({
    defaults: {
        duration: 1
    }
})
timeline
    .from('.head-img', {
        x: '100vw',
        opacity: 0
    }, 0)
    .from('.head-description', {
        x: '-120%',
        opacity: 0
    }, 0)
    .from('.nav-item', {
        opacity: 0,
        stagger: .4
    })


// opacity left to right

ScrollTrigger.batch(".grid-item", {
    start: "top bottom",
    once: true,
    onEnter: (elements, triggers) => {
        gsap.from(elements, {
                opacity: 0,
                stagger:.5,
                duration: 1
            })
    }
})

// fade up
ScrollTrigger.batch(".section-3", {
    start: "top bottom",
    once: true,
    onEnter: (elements, triggers) => {
        gsap.from(elements, {
                opacity: 0,
            y: '200%',
                duration: 1
            })
    }
})