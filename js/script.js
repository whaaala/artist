///////////////////////////////////////////////////////////
// Smooth Scrolling animation

const allLinks = document.querySelectorAll("a:link"); /*a:link will select all anchor elements that ONLY have the: href Property*/
const vd = 'https://dl.dropboxusercontent.com/scl/fi/ojrl9u418s03vjfzn87ml/holyfather.mp4?rlkey=h7rhnst1ukyhk0tkakt79jgts&dl=0';


allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); /*this is to prevent the default behavour of JavaScript */
    const href = link.getAttribute("href"); /* this is to get the value of href for each Element */

  
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
    }else if(href !== "#"){
      if (href.indexOf("tsax") > -1 || href.indexOf("tsax") > -1) {
       window.open(href)
      }else {
        window.location.href= href
      }
    }

    // if(href !== "#"){
    //   window.location.href= href
    // }
    //close Mobile navigation menu
    // if (link.classList.contains("home__navbar__nav__wrapper__nav-link"))
    //   headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
const homeheaderPlay = document.querySelector(".header__home__btn--play");
const imgSelection = document.querySelectorAll(".gallery-page__gallery img");
const popupWin = document.querySelector(".container__popup");
const imgpopup = document.querySelector(".gallery-page__popup img");
const vSelection = document.querySelectorAll(".video-page__videos img");
const vPlayBtn = document.querySelectorAll(".video-page__videos ion-icon");
const vPopup = document.querySelector(".video-page__popup iframe");
const vP = document.querySelector(".video-page__popup");
const video = document.createElement("video");
const source = document.createElement("source");
const vEl = document.querySelector('video')

///////////////////////////////////////////////////////////
//home header video pop up
if (typeof homeheaderPlay != "undefined" && homeheaderPlay != null) {
  homeheaderPlay.addEventListener('click', function(){
    popupWin.style.display = "block";
    
    video.setAttribute("width", "700")
    video.setAttribute("height", "345")
    video.setAttribute("controls", "")
    source.setAttribute("frameborder", "0")
    source.setAttribute("allowfullscreen", "")
    source.setAttribute("allow", "autoplay")
    vP.appendChild(video);
    video.appendChild(source)
    source.src = vd
  })

}

///////////////////////////////////////////////////////////
//Gallery image pop up
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
    
    if(typeof video != "undefined" && video != null){
      video.remove();
      source.remove();
    }
  });
}

// if (typeof galleryoverlay != "undefined" && galleryClosebtn != null) {
//   galleryoverlay.addEventListener("click", function () {
//     galleryoverlay.style.display = "none";
    
//     if(typeof vPopup != "undefined" && vPopup != null){
//       vPopup.removeAttribute("src");
//     }
//   });
// }
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

///////////////////////////////////////////////////////////
//paly btn video pop up
vPlayBtn.forEach((icon) => {
  icon.addEventListener("click", function () {
    console.log(icon.parentNode.parentNode.firstElementChild);
    popupWin.style.display = "block";
    const embed = icon.parentNode.parentNode.firstElementChild.getAttribute("embed")
    const src=`https://www.youtube.com/embed/${embed}?autoplay=1&rel=0&autoplay=1&controls=1&modestbranding=1`
    vPopup.src = src;
  })
})