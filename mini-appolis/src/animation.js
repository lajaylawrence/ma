// JAVASCRIPT ANIMATIONS USING GSAP, SCROLLTRIGGER

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// section 1 animations
let tl = gsap.timeline({

    scrollTrigger: {
        trigger: ".container1",
        start: "0px 0%", 
        endTrigger: ".container3", 
        // markers: true,
        scrub: true, 
        pin: true, 
        pinSpacing: false, 
        toggleClass: "active",

    },
})




tl.from(".container1", { duration: 1, css: { background: "linear-gradient(to top, #fff8cf 50%, #e6876e)" } }, 0)
// nav 
tl.to(".logo", 0.5, { top: "-150px" },0)
tl.to(".nav-bar", 0.5, { wordSpacing: "0px", color: "#80ffec", top: "-110px", marginLeft: "80%" }, 0)

tl.to(".logo-container", 2, { css: { left: "30px" } }, 0.3)

tl.to(".sun", 1.2, { motionPath: "M 0 0 Q 200 0 200 300"}, 0)
tl.to(".building1", 0.5, { css: { opacity: "0" } }, 0)
// tl.to(".overlay", 1, { css: { opacity: "1" } }, 0)
tl.to(".container1", { duration: 5, css: { background: "linear-gradient(to top, #80ffec 10%, #25548e , #00033a )" } },0.5)

tl.to(".sun", 0.2, { css: { display: "none" } }, 0.2)
tl.to(".cloud", 0.2, { css: { opacity: "0" } }, 0)
tl.to(".cloud2", 0.2, { css: { opacity: "0" } }, 0)
tl.to(".overlay", 0.3, { css: { opacity: "1"} }, 0)
tl.to(".body", 0.5, { css: { background: "#00000e"}}, 0)

tl.to(".building2", 0.5, { css: { height: "100%" } }, 0.4)
tl.to(".overlay2", 2, { css: { opacity: "0" } }, 1)
// tl.to(".building2", 0.5, { css: { top: "0%"} }, 0.4)
// tl.to(".building1", 1, { css: { top: "100%", opacity: "0" } }, 0.5)
tl.to(".overlay", 2, { css: {  top: "100%" } }, 0.5)

tl.to(".moon", 4, { css: { display: "block", height: "100px", width: "100px"}, motionPath: "M 0 0 Q 200 0 200 300 " }, 0.3)
tl.to(".stars", 1, { css: { opacity: 0.9}}, 0.3)



tl.to(".star", 1, { css: { opacity: 1 } }, 0.3)
tl.to(".star5", 0, { css: { display: "none",background: "white",borderRadius: "40px", height: "5px", width: "5px" }, motionPath: "M 1200 100 Q 100 200 350 250 Q 700 300 610 151 " },2)
tl.to(".star1", 1, { css: { display: "block", height: "20px", width: "20px" }, motionPath: "M 100 0 Q 100 200 350 250 Q 700 300 600 150 " },2)
tl.to(".star5", 0.2, { css: { display: "block",background: "white", height: "20px", width: "20px",left: "-10px" } },2.9)
tl.to(".star2", 1, { css: { display: "block", height: "20px", width: "20px" }, motionPath: "M 1000 0 Q 100 200 350 250 Q 700 300 600 150 " },2.2)
tl.to(".star5", 0.3, { css: { background: "red", height: "25px", width: "25px" } }, 3.1)
tl.to(".star3", 1, { css: { display: "block", height: "20px", width: "20px" }, motionPath: "M 400 20 Q 100 200 350 250 Q 700 300 600 150 " },2.4)
tl.to(".star5", 0.3, { css: { background: "yellow", height: "20px", width: "20px" } }, 3.3)
tl.to(".star4", 1, { css: { display: "block", height: "20px", width: "20px" }, motionPath: "M 1200 0 Q 100 200 350 250 Q 700 300 600 150 " },2.6)
tl.to(".star5", 0.3, { css: { background: "green", height: "25px", width: "25px" } }, 3.5)
tl.to(".star6", 1, { css: { display: "block", height: "20px", width: "20px" }, motionPath: "M 1100 100 Q 100 200 350 250 Q 700 300 600 150 " }, 2.8)
tl.to(".star5", 0.3, { css: { background: "blue", height: "20px", width: "20px" } }, 3.7)
tl.to(".star7", 1, { css: { display: "block", height: "20px", width: "20px" }, motionPath: "M 900 50 Q 100 200 350 250 Q 700 300 600 150 " }, 3)
tl.to(".star5", 0.3, { css: { background: "orange", height: "25px", width: "25px" } }, 3.9)
tl.to(".star8", 1, { css: { display: "block", height: "20px", width: "20px" }, motionPath: "M 200 40 Q 100 200 350 250 Q 700 300 600 150 " }, 3.2)
tl.to(".star5", 0.3, { css: { background: "white", height: "20px", width: "20px" } }, 4.1)
tl.to(".remove", 0.2, { css: { display: "none" } }, 4)
tl.to(".star5", 0.8, { css: { position: "absolute" } ,motionPath: "M 612 149 Q 552 199 612 209 Q 712 199 612 149 " }, 4.2)
tl.to(".billboard", 0.8, { css: { position: "absolute" }, motionPath: "M 612 149 Q 552 199 612 209 Q 712 199 612 149 " }, 4.2)

tl.to(".container1", 0.2, { css: { transform: "scale(1.5)" } }, 5)

tl.to(".star5", 0.2, { css: { background: "yellow", display: "block",borderRadius: "40px", height: "50px", width: "20px", bottom: "200px" }}, 4.9)

tl.to(".star5", 0.7, { css: { display: "block", borderRadius: "40px", height: "50px", width: "20px", bottom: "500px" } })

// tl.to(".star5", 0.2, { css: { display: "block", borderRadius: "40px", height: "40px", width: "10px", bottom: "400px" } })

tl.to(".star5", 0.2, { css: { background: "white", display: "block", borderRadius: "40px", height: "100px", width: "10px", bottom: "300px"} })

tl.to(".billboard", 0, { css: {  width: "10px", height: "120px", bottom: "290px" , left: "-100px"} })

tl.to(".star5", 0.3, { css: { left: "-100px"} }, 6)
tl.to(".billboard", 0, { css: { display: "block" } })
tl.to(".star5b", 0.4, { css: { left: "110px" } }, 6.5)
tl.to(".billboard", 0.4, { css: { width: "300px", left: "-140px" } }, 6.5)

tl.to(".star5b", 0.4, { css: { left: "-100px" } }, 7.2)
tl.to(".billboard", 0.4, { css: { width: "10px", left: "-100px" } }, 7.2)

tl.to(".remove2", 0, { css: { display: "none" } }, 7.9)
tl.to(".star5b", 0.4, { css: { left: "110px" } }, 8)
tl.to(".billboard", 0.4, { css: { width: "300px", left: "-140px" } }, 8)

tl.to(".star5b", 0.4, { css: { left: "-100px" } }, 8.7)
tl.to(".billboard", 0.4, { css: { width: "10px", left: "-100px" } }, 8.7)
tl.to(".billboard", 0, { css: { display: "none" } }, 9.4)

tl.to(".container1", 0.2, { css: { transform: "scale(1)" } }, 9.5)
tl.to(".star5", 1, { css: { height: "10px", bottom: "0px"} },9.5)

tl.to(".star5", 0.5, { css: { left: "-50%", width: "100%", background: "red" } })


tl.to(".first-area", 5, { css: {marginTop: "-10%", height: "1000px" } }, 7.5)
tl.to(".building2", 1, { css: { bottom: "40%" } }, 10.2)


tl.to(".first-area", 5, { css: { marginTop: "-100%" } }, )




// section 2 animations
let tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: ".container2",
        start: "10000px 0%",
        endTrigger: ".container3",
        
        pinSpacing: false,
        

    },
})


tl2.to(".text1", 2, { css: { opacity: "1" } },)
tl2.to(".text2", 2, { css: { opacity: "1" } },0.5)

tl2.from(".logo-container", 2, { css: { transform: "rotate(0deg)" } },0)

tl2.to(".logo-container", 2, { css: { transform: "rotate(560deg)", left: "300px" } }, 0.3)

tl2.to(".logo-container", 2, { css: { transform: "rotate(0deg)", left: "30px" } },2)


// section 3 animations
let tl3 = gsap.timeline({

    scrollTrigger: {
        trigger: ".container2",
        start: "12000px 0%",
        endTrigger: ".container3",
        
        pinSpacing: false,
        

    },
})


tl3.to(".enso", 1, { css: { right: "0px" } },)
tl3.to(".text3", 1, { css: { opacity: "1" } },)









