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

// CARUSEL
function carusel3() {
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
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
        centerMode: false,
        centerPadding: "0",
        variableWidth: false

    });
}

function carusel2() {
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 2,
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
        centerPadding: "0",
        variableWidth: false

    });
}

function carusel1() {
    $('.slider').slick({
        dots: false,
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
        centerPadding: "0",
        variableWidth: false

    });
}

function caruselNoArrow() {
    $('.slider').slick({
        arrows: false,
        dots: false,
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
        centerPadding: "0",
        variableWidth: false

    });
}

function carusel() {
    $(document).ready(function() {
        if(windowWidth >= 1180) {
            carusel3()
        } else if(windowWidth <= 1179 && windowWidth >= 830) {
            carusel2()
        } else if (windowWidth <= 829 && windowWidth >= 421) {
            carusel1()
        } else {
            caruselNoArrow()
        }
    })
}

function reload() {
    location.href = "/html/tasks_ua.html"
}

// CARUSEL
function sliderWidthControl() {
    window.addEventListener('resize', () => {
        windowWidth = outerWidth
        // setTimeout(reload(), 2000)
    })
}

sliderWidthControl()
carusel()

const i1 = document.querySelector('#i1')
const i2 = document.querySelector('#i2')
const i3 = document.querySelector('#i3')
const i4 = document.querySelector('#i4')
const i5 = document.querySelector('#i5')
const i6 = document.querySelector('#i6')
const spacer = document.querySelector(".spacer")

helpToggle = false

function helpNotReset() {
    spacer.innerHTML = ""
    helpToggle = false

}

function helpNot() {
    if(helpToggle == false) {
        spacer.innerHTML = "ⓘ Кликните дважды по видео что бы открыть"
        setTimeout(helpNotReset, 5000)
    } 
}

i1.onclick = () => {
    helpNot()
    helpToggle = true
}
i2.onclick = () => {
    helpNot()
    helpToggle = true
}
i3.onclick = () => {
    helpNot()
    helpToggle = true
}
i4.onclick = () => {
    helpNot()
    helpToggle = true
}
i5.onclick = () => {
    helpNot()
    helpToggle = true
}
i6.onclick = () => {
    helpNot()  
    helpToggle = true 
}

i1.ondblclick = () => {
    window.open("https://www.youtube.com/watch?v=FtgmT3VmSbU")
    spacer.innerHTML = ""
    i1.onclick = null

}
i2.ondblclick = () => {
    window.open("https://www.youtube.com/watch?v=di6QEA39Iok")
    spacer.innerHTML = ""
    i2.onclick = null
}
i3.ondblclick = () => {
    window.open("https://www.youtube.com/watch?v=m4wDbz6G3PA")
    spacer.innerHTML = ""
    i3.onclick = null
}
i4.ondblclick = () => {
    window.open("https://www.youtube.com/watch?v=FtgmT3VmSbU")
    spacer.innerHTML = ""
    i4.onclick = null
}
i5.ondblclick = () => {
    window.open("https://www.youtube.com/watch?v=di6QEA39Iok")
    spacer.innerHTML = ""
    i5.onclick = null
}
i6.ondblclick = () => {
    window.open("https://www.youtube.com/watch?v=m4wDbz6G3PA")
    spacer.innerHTML = ""
    i6.onclick = null
}

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