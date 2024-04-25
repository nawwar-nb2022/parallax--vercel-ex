let thirdSection = document.querySelector(".thirdSection"); //main container
let leftContainer = document.querySelector(".thirdSection .leftContainer") //image 
let textContainer = document.querySelector(".thirdSection .leftContainer .textContainer") //textContainer
let paragraph  = textContainer.querySelector(".para") 
let last  = textContainer.querySelector(".last").querySelector(".lastText")



let listContainer = thirdSection.querySelector(".listContainer")
let listContainerItem = thirdSection.querySelector(".listContainer").querySelectorAll('.text')


listContainer.addEventListener("mouseover", (e)=>{
    // console.log(e.target);
    let element = e.target.parentNode
    let one = element.classList.contains("one")
    let two = element.classList.contains("two")
    let three = element.classList.contains("three")
        last.style.opacity= '0'


    if(one){
        listContainerItem.forEach(el=>{
            el.classList.remove("active")
        })
        element.classList.add("active")

        leftContainer.style.backgroundImage = "url('./assets/images/view-bioengineering-advance-with-robotic-hands.webp')"
        paragraph.textContent = `Including Fintech, Blockchain,
                                Datacenter, Cloud Computing, and AI.
                                We invest in and nurture early-stage
                                technology startups, providing
                                crucial capital, mentorship, and
                                resources to transform innovative
                                ideas into scalable and impactful
                                businesses. Our approach is rooted
                                in identifying and supporting
                                visionary entrepreneurs poised to
                                disrupt industries`

    }
    if(two){
        listContainerItem.forEach(el=>{
            el.classList.remove("active")
        })
        element.classList.add("active")

        leftContainer.style.backgroundImage = "url('./assets/images/two-cheerful-businessman-handshaking-helmet-new-building.webp')"
        paragraph.textContent = `
                    In the realm of industrial projects,
                    B1 Holding plays a pivotal role in
                    financing and developing
                    cutting-edge initiatives. We are
                    committed to driving advancements in
                    manufacturing, infrastructure, and
                    technology, contributing to the
                    growth and competitiveness of
                    industries.`
    }
    if(three){
        listContainerItem.forEach(el=>{
            el.classList.remove("active")
        })
        
        element.classList.add("active")
    
    
        leftContainer.style.backgroundImage = "url('./assets/images/view-bioengineering-advance-with-robotic-hands.webp')"
        paragraph.textContent = ` Including recycling, solar systems,
                                stones, and electrical cars, etc.`
    }
    
})
