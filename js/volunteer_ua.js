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

const icon_yt = document.getElementById("s3_soc_item1")
const icon_fb = document.getElementById("s3_soc_item2")
const icon_tw = document.getElementById("s3_soc_item3")
const icon_ig = document.getElementById("s3_soc_item4")
const icon_tg = document.getElementById("s3_soc_item5")

icon_yt.onclick = () => {
    window.open("https://www.youtube.com/channel/UCcAZcXGet5-vwwVN_38fHpQ")
}
icon_fb.onclick = () => {
    window.open("https://www.facebook.com/VicheUA")
}
icon_tw.onclick = () => {
    window.open("https://twitter.com/viche_ua?s=21HYPERLINK")
}
icon_ig.onclick = () => {
    window.open("https://instagram.com/viche_ua?igshid=YmMyMTA2M2Y=")
}
icon_tg.onclick = () => {
    window.open("https://t.me/viche_UA")
}