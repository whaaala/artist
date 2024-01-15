///////////////////////////////////////////////////////////
// Smooth Scrolling animation

const allLinks =
  document.querySelectorAll(
    "a:link"
  ); /*a:link will select all anchor elements that ONLY have the: href Property*/

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); /*this is to prevent the default behavour of JavaScript */
    const href =
      link.getAttribute(
        "href"
      ); /* this is to get the value of href for each Element */

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0 /* this is for the position of where to scroll to on the page*/,
        behavior: "smooth",
      });

    // Scroll each section
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close Mobile navigation menu
    // if (link.classList.contains("home__navbar__nav__wrapper__nav-link"))
    //   headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
//Gallery picture pop up
const imgSelection = document.querySelectorAll(".gallery-page__gallery img");
const popupWin = document.querySelector(".container__popup");
const imgpopup = document.querySelector(".gallery-page__popup img");
const vSelection = document.querySelectorAll(".video-page__videos img");
const vPlayBtn = document.querySelectorAll(".video-page__videos ion-icon");
const vPopup = document.querySelector(".video-page__popup iframe");

imgSelection.forEach((img) => {
  img.addEventListener("click", function () {
    popupWin.style.display = "block";
    imgpopup.src = img.getAttribute("src");
    imgpopup.alt = img.getAttribute("alt");
  });
});

//Gallery picture close button
const galleryClosebtn = document.querySelector(".container__popup__close-btn");

//Gallery picture overlay
const galleryoverlay = document.querySelector(".container__popup");

if (typeof galleryClosebtn != "undefined" && galleryClosebtn != null) {
  galleryClosebtn.addEventListener("click", function () {
    galleryoverlay.style.display = "none";

    if(typeof vPopup != "undefined" && vPopup != null){
      vPopup.removeAttribute("src");
    }
  });
}

if (typeof galleryoverlay != "undefined" && galleryClosebtn != null) {
  galleryoverlay.addEventListener("click", function () {
    galleryoverlay.style.display = "none";
    
    if(typeof vPopup != "undefined" && vPopup != null){
      vPopup.removeAttribute("src");
    }
  });
}
///////////////////////////////////////////////////////////
//Gallery video pop up
vSelection.forEach((img) => {
  img.addEventListener("click", function () {
    popupWin.style.display = "block";
    const embed = img.getAttribute("embed")
    const src=`https://www.youtube.com/embed/${embed}?autoplay=1&rel=0&autoplay=1&controls=1&modestbranding=1`
    vPopup.src = src;
  })
})

vPlayBtn.forEach((icon) => {
  icon.addEventListener("click", function () {
    console.log(icon.parentNode.parentNode.firstElementChild);
    popupWin.style.display = "block";
    const embed = icon.parentNode.parentNode.firstElementChild.getAttribute("embed")
    const src=`https://www.youtube.com/embed/${embed}?autoplay=1&rel=0&autoplay=1&controls=1&modestbranding=1`
    vPopup.src = src;
  })
})