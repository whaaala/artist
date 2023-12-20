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

