AOS.init({
    // Global settings:
    disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of data-aos as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
    // Settings that can be overridden on per-element basis, by data-aos-* attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

const logo = document.querySelector(".h_logo_box")


const burger = document.querySelector(".burger_body")
const burger_menu = document.querySelector(".burger_menu_body")

const line1 = document.getElementById("burger_line1")
const line2 = document.getElementById("burger_line2")
const line3 = document.getElementById("burger_line3")

// SOCIAL
const f_icon_yt = document.getElementById("soc_item1")
const f_icon_fb = document.getElementById("soc_item2")
const f_icon_tw = document.getElementById("soc_item3")
const f_icon_ig = document.getElementById("soc_item4")
const f_icon_tg = document.getElementById("soc_item5")

f_icon_yt.onclick = () => {
    window.open("https://www.youtube.com/channel/UCcAZcXGet5-vwwVN_38fHpQ")
}
f_icon_fb.onclick = () => {
    window.open("https://www.facebook.com/VicheUA")
}
f_icon_tw.onclick = () => {
    window.open("https://twitter.com/viche_ua?s=21HYPERLINK")
}
f_icon_ig.onclick = () => {
    window.open("https://instagram.com/viche_ua?igshid=YmMyMTA2M2Y=")
}
f_icon_tg.onclick = () => {
    window.open("https://t.me/viche_UA")
}


// functions
function burgerTransform() {
    line1.classList.toggle("open")
    line2.classList.toggle("open")
    line3.classList.toggle("open")
}





// Action
burger.onclick = () => {
    burger_menu.classList.toggle("open")
    burgerTransform()
}

logo.onclick = () => {
    location.href = "/index.html"
}

