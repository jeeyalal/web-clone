// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function locomotiveAnimation() {
    
     
}

function videoAnimation() {
    var videocon = document.querySelector("#video-con")
    var playbutton = document.querySelector("#play")

    videocon.addEventListener("mouseenter", function () {

        gsap.to(playbutton, {
            scale: 1,
            opacity: 1
        })
    })
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbutton, {
            scale: 0,
            opacity: 0
        })

    })

    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbutton, {
            left: dets.x,
            top: dets.y
        })

    })
}
videoAnimation()

function loadingAnimation() {

    gsap.from("#page1 h1", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.3
    })
    gsap.from("#page1 #video-con", {
        scale: 0.9,
        opacity: 0,
        delay: 1.2,
        duration: 0.5,

    })
}

loadingAnimation()

function cursor() {

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })

    document.querySelector("#page3").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            Transform: 'translate(-50%,-50%) scale(1)'
        })
    })
    document.querySelector("#page3").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            Transform: 'translate(-50%,-50%) scale(0)'
        })
    })

}
cursor()