// first section
gsap.registerPlugin(ScrollTrigger)

gsap.to(".firstSection .imageContainer img" , {
    x: 110,
    duration : 2
})
gsap.to(".firstSection .extraShadow img" , {
    x: -155,
    duration : 2
})


// second section


gsap.to("body" , {
    // change body background color depend on .secondSection
    background : "#110A06",
    scrollTrigger :{
        trigger :".secondSection",
        // markers : true,     
        start : "top center"  ,
        // toggle the action depend enter or exit the .secondSection element 
        toggleActions : "play none none reset" 
    },
})

gsap.to(".secondSection .topRight" , {
    y : -150,
    // duration : 3,
    scrollTrigger :{
        trigger : ".secondSection",
        scrub:3,
        // markers : true,
        toggleActions : "play  complete reverse reset", 
        start : "top 50%",
    } 
})
gsap.to(".secondSection .showOnSmallScreen" , {
    y : -50,
    // duration : 3,
    scrollTrigger :{
        trigger : ".secondSection",
        scrub:3,
        // markers : true,
        toggleActions : "play  complete reverse reset", 
        start : "top 30%",
    } 
})


gsap.to(".secondSection .bottomLeft", {
    y:-200,
    duration : 3,
    scrollTrigger :{
        trigger : ".secondSection",
        //  markers : true,
        toggleActions : "play  complete reverse reset", 
        start : "bottom 90%",
    }
})

// end second section


// start third section

// float image to the center 
gsap.to(".thirdSection .FloatImage",{
   top : "100%",
    // duration : 4,
    scrollTrigger : {
        trigger : ".thirdSection",
        // markers : true,
        scrub :10 ,
        start : "top 30%",
    }
})
// right container text section
gsap.to(".thirdSection .rightContainer" , {
    marginTop: "0" ,
    duration : 1,
    scrollTrigger : {
        trigger : ".thirdSection",
        // scrub : 1 ,
        // markers : true,
        toggleActions : "play  complete reverse reset", 
        end : "bottom  center",
        start : "top 80%"
    }
})

// timeLine for execute animation one after another 


tl = gsap.timeline({
    scrollTrigger : {
        trigger : ".thirdSection .rightContainer ",
        // markers : true,
        toggleActions : "play none reverse reset", 
        start  : "top 40%",
        end : "top 10%"
    }
})

tl.to(".thirdSection .listContainer .divider.one" , {
    width : "100%",
    duration  : 0.2,
    })
  .to(".thirdSection .listContainer .text.one" , {
      opacity : "1",
      duration : 0.2
  })
  .to(".thirdSection .listContainer .divider.two",{
      width : "100%",
      duration : 0.2
  })
  .to(".thirdSection .listContainer .text.two" , {
      opacity : "1",
      duration : 0.2
  })
  .to(".thirdSection .listContainer .divider.three",{
      width : "100%",
      duration : 0.2
  })
  .to(".thirdSection .listContainer .text.three" , {
      opacity : "1",
      duration : 0.2
  })
  .to(".thirdSection .listContainer .divider.four",{
      width : "100%",
      duration : 0.2
  })

//  start fourth section 

tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : ".fourthSection",
        toggleActions : "play none reverse reset"
    }
})

// gsap.to(".fixedInCenter",{
//     top :"45vh",
//     scrollTrigger :{ 
//         trigger : ".fourthSection",
//         scrub : 4,
//         markers: true,
//         start : "top 0%",
//         end : "top 800px"
        
//     }
// })
ScrollTrigger.create({
    trigger : ".fixedInCenter",
    // markers : true ,
    start :"top 20%",
    end :()=>`+=${document.querySelector(".fourthSection").offsetHeight}`,
    toggleClass : "fixedAction",
})

// end fixed center box

// start other item


gsap.to(".fourthSection .cardsContainer .Title", {
    y : -25 ,
    opacity : 1,
    duration : 2 , 
    scrollTrigger : {
    trigger  : ".cardsContainer",
    // markers : true,
    toggleActions : "play none reverse reset",
    start : "top 100%"
    }
})

// gsap.to(".centerCenter" , {
//     y : -100 ,
//     scrollTrigger : {
//         trigger : ".centerCenter",
//         scrub :4,
//         // markers : true,
        
//     toggleActions : "play none reverse reset",
//     }
// })

// gsap.to(".bottomRight" , {
//     y : -100 ,
//     scrollTrigger : {
//         trigger : ".bottomRight",
//         scrub :4,
//         // markers : true,
        
//     toggleActions : "play none reverse reset",
// }
// })


// gsap.to(".fourthSection .footerOfTheSection .ContainerWrapper" , {
//     y : -50 , 
//     opacity : 1,
//     duration : 2, 
//     scrollTrigger : {
//         trigger : ".fourthSection .footerOfTheSection .ContainerWrapper",
//         toggleActions : "play none reverse reset",
//         // markers: true,
//         start : "top 90%"
//     }   
// })


// fifth section 

// first pin the video on all the screen 
gsap.to("video" , {
    scale : 0.8,
    duration :2,
    scrollTrigger : {
        trigger : ".fifthSection",
        // scrub : 3,
        // markers : true,
        pin : true , 
        pinSpacing : false,
        pinSpacer: false,
        pinnedContainer : false,
         immediateRender: false,
        // toggleClass : "fixedVideo",
        // start : "bottom 0",
        
        end : "bottom bottom",
        toggleActions : "play reset revers reset"
    }
})





gsap.to(".Section100vh--videoWithMask--plus" , {
    // scale : 1.1,
    duration : 1,
    background : "rgba(255,255,255,0.9)",
    scrollTrigger : {
        trigger : ".Section100vh--videoWithMask--plus",
        // pin : true, 
        // pinSpacing : false,
        // pinnedContainer:false,
        // pinSpacer: false,
        // markers : true,  
        // scrub : 1,
        start : "top 100%",
        end : "bottom top",
    
        
        immediateRender: false,
         
        toggleActions : "play none reverse reset"

    }
})
gsap.to(".Section100vh--videoWithMask--plus" , {
    // scale : 1.1,
    y: -150,
    duration : 2,
    scrollTrigger : {
        trigger : ".Section100vh--videoWithMask--plus",
        pin : true, 
        pinSpacing : false,
        pinnedContainer:false,
        pinSpacer: false,
        // markers : true,  
        scrub : 1,
        start : "top 20%",
        end : "bottom 20%",
    
        
         immediateRender: false,
         
        toggleActions : "play none reverse reset"

    }


})
tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : ".fifthSection .listContainer",
        // markers : true,
        toggleActions : "play none reverse reset", 
        // markers :true,
        start : "top 20%"
    }
})


tl3.to(".fifthSection .listContainer .divider.one" , {
    width : "100%",
    duration  : 1,
    })
  .to(".fifthSection .listContainer .text.one" , {
      opacity : "1",
      duration : 1,
  })
  .to(".fifthSection .listContainer .divider.two",{
      width : "100%",
      duration : 1
  })
  .to(".fifthSection .listContainer .text.two" , {
      opacity : "1",
      duration : 1
  })
  .to(".fifthSection .listContainer .divider.three",{
      width : "100%",
      duration : 1
  })
  .to(".fifthSection .listContainer .text.three" , {
      opacity : "1",
      duration : 1
  })
  .to(".fifthSection .listContainer .divider.four",{
      width : "100%",
      duration : 1
  })
  .to(".fifthSection .listContainer .text.four" , {
      opacity : "1",
      duration : 1
  })
  .to(".fifthSection .listContainer .divider.five",{
      width : "100%",
      duration : 1
  })
