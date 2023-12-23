///////////////////////////////////////////////////////////
// Sticky navigation

const homeHeaderE1 = document.querySelector('.header__home');

/* this is used to observe an Element*/
const observer = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    console.log(ent);
    if(!ent.isIntersecting){
        document.body.classList.add('sticky');
    }
    if(ent.isIntersecting){
        document.body.classList.remove('sticky');
    }
},{
    root:null, /* Null: means the Element to observe will be observed inside of the ViewPort */
    threshold: 0, /* 0: means an Event will be fired as soon as the Element been observed reaches 0% on the viewport (meaning the Element is no longer visible on the Screen)*/
    rootMargin:'-80px', /* this is used to apply margin outside of the root(the viewport)-- IT HAS TO BE IN PIXEL, and the Valuehas to be the Height set for the Navigational menu in the CSS Rule for the sticky Rule*/
});

observer.observe(homeHeaderE1);

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
    if (link.classList.contains("home__navbar__nav__wrapper__nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////