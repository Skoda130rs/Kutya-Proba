// Carousel

var slideIndex = 0;


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}


//Kovacspet Topmenu begin//
function mobil() {
    var x = document.getElementById("myMenu");
    if (x.className === "menuTop") {
        x.className += " responsive";
    } else {
        x.className = "menuTop";
    }
}
//Kovacspet Topmenu end//

//Animation starts when on screen //

function animation() {

    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("slide", entry.isIntersecting);
        });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1 };
    const elements = document.querySelectorAll('.slide');
    elements.forEach(el => {
        observer.observe(el, options);
    });

}

//Footer start by Kubi//

//Footer end by Kubi//

function init() {
    showSlides();
    animation();
}

window.addEventListener("load", init);