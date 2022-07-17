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

let windowWidth = outerWidth

const s3_btn1 = document.getElementById("s3_btn1")
const s3_video_box = document.querySelector(".s3_video_box")
const s4_btn = document.querySelector(".s4_btn")
const s5_btn = document.querySelector(".s5_btn")
const s6_button = document.getElementById("s6_button")
const s3_btn_slider = document.querySelectorAll("#s3_btn_slider")

// CARUSEL
function sliderWidthControl() {
    window.addEventListener('resize', () => {
        windowWidth = outerWidth
        console.log(windowWidth)
    })

}

sliderWidthControl()
carusel()


function carusel() {
$(document).ready(function() {
    if(windowWidth > 1180) {
        $('.slider').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            speed: 700,
            easing: 'linear',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            draggable: true,
            swipe: true,
            touchThreshold: 5,
            touchMove: true,
            waitForAnimate: true,
            centerMode: true,
        

        });
    } else {
        $('.slider').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            speed: 700,
            easing: 'linear',
            infinite: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            draggable: true,
            swipe: true,
            touchThreshold: 5,
            touchMove: true,
            waitForAnimate: true,
            centerMode: true,
        

        });
    }
})
}

const icon_fb = document.getElementById("s3_social_item1")
const icon_tw = document.getElementById("s3_social_item2")
const icon_ig = document.getElementById("s3_social_item3")
const icon_tg = document.getElementById("s3_social_item4")

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

s3_btn1.onclick = () => {
    location.href = "/html/tasks_ua.html"
}

s3_video_box.onclick = () => {
    location.href = "https://www.youtube.com/channel/UCcAZcXGet5-vwwVN_38fHpQ"
}

s4_btn.onclick = () => {
    location.href = "/html/enter_ua.html"
}

s5_btn.onclick = () => {
    location.href = "/html/volunteer_ua.html"
}
s6_button.onclick = () => {
    location.href = "/html/support_ua.html"
}
for (let i = 0; i < s3_btn_slider.length; i++) {
    s3_btn_slider[i].onclick = function(){
        location.href = "/html/activity_ua.html"
    }
  }

