/* =========================
   START BUTTON
========================= */

const startBtn = document.getElementById("startBtn");

const presentation =
    document.getElementById("presentation");


startBtn.addEventListener("click", () => {

    presentation.scrollIntoView({
        behavior: "smooth"
    });

    createParticles();

});


/* =========================
   SLIDER
========================= */

let slideIndex = 1;

showSlide(slideIndex);


function changeSlide(n) {

    showSlide(slideIndex += n);

}


function currentSlide(n) {

    showSlide(slideIndex = n);

}


function showSlide(n) {

    const slides =
        document.querySelectorAll(".slide");

    const dots =
        document.querySelectorAll(".dot");


    if (n > slides.length) {
        slideIndex = 1;
    }


    if (n < 1) {
        slideIndex = slides.length;
    }


    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[slideIndex - 1]
        .classList.add("active");


    dots[slideIndex - 1]
        .classList.add("active");

}


/* =========================
   AUTOMATIC PRESENTATION
========================= */

let autoSlide =
    setInterval(() => {

        changeSlide(1);

    }, 5000);


/* =========================
   PARTICLES
========================= */

function createParticles() {

    const container =
        document.querySelector(".particles");


    setInterval(() => {

        const particle =
            document.createElement("div");


        const symbols = [
            "🌸",
            "💖",
            "✨",
            "🌷",
            "💗",
            "⭐"
        ];


        particle.classList.add("particle");


        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.fontSize =
            (Math.random() * 20 + 10) + "px";


        particle.style.animationDuration =
            (Math.random() * 5 + 5) + "s";


        container.appendChild(particle);


        setTimeout(() => {

            particle.remove();

        }, 10000);


    }, 500);

}


/* =========================
   INITIAL PARTICLES
========================= */

createParticles();


/* =========================
   CLICK HEART EFFECT
========================= */

document.addEventListener("click", (event) => {

    const heart =
        document.createElement("div");


    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.pointerEvents =
        "none";

    heart.style.fontSize = "20px";

    heart.style.zIndex = "9999";

    heart.style.animation =
        "clickHeart 1s ease forwards";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 1000);

});


/* =========================
   CLICK HEART ANIMATION
========================= */

const style =
    document.createElement("style");


style.innerHTML = `

@keyframes clickHeart {

    0% {

        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(.5);

    }

    100% {

        opacity: 0;

        transform:
            translate(-50%, -120px)
            scale(1.8);

    }

}

`;


document.head.appendChild(style);