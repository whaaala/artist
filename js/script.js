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
//Gallery picture close button
const imgSelection = document.querySelectorAll(".gallery-page__gallery img");
const popupWin = document.querySelector(".container__popup");
const imgpopup = document.querySelector(".gallery-page__popup img");

imgSelection.forEach((img) => {
  img.addEventListener("click", function () {
    popupWin.style.display = "block";
    imgpopup.src = img.getAttribute("src");
    imgpopup.alt = img.getAttribute("alt");
  });
});
///////////////////////////////////////////////////////////
//Gallery picture close button
const galleryClosebtn = document.querySelector(".container__popup__close-btn");

//Gallery picture overlay
const galleryoverlay = document.querySelector(".container__popup");

if (typeof galleryClosebtn != "undefined" && galleryClosebtn != null) {
  galleryClosebtn.addEventListener("click", function () {
    galleryoverlay.style.display = "none";
  });
}

if (typeof galleryoverlay != "undefined" && galleryClosebtn != null) {
  galleryoverlay.addEventListener("click", function () {
    galleryoverlay.style.display = "none";
  });
}
