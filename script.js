const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoAnimation() {
    var videocon = document.querySelector("#video-con")
    var playbutton = document.querySelector("#play")
    
    videocon.addEventListener("mouseenter", function(){
        
        gsap.to(playbutton,{
            scale:1,
            opacity:1
        })
    })
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbutton,{
            scale:0,
            opacity:0
        })
    
    })
    
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbutton,{
            left:dets.x,
            top:dets.y
        })
    
    })  
}
videoAnimation()

gsap.from("#page1 h1",{
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.3
})
gsap.from("#page1 #video-con",{
    scale:0.9,
    opacity:0,
    delay:1.2,
    duration:0.5,
    
})

document.addEventListener("mousemove",function(dets){
     gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
     })
})

document.querySelector('#child1').addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
    })
})

document.querySelector('#child1').addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})
