let init = () => {
    burger_nav();
};
let swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerview: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let swiper2 = new Swiper(".mySwiper2", {
    direction: "horizontal",
    slidesPerview: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll(".contador-cantidad");
    const velocidad = 300;
    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima / velocidad;
                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento);
                    setTimeout(actualizar_contador, 1);
                } else {
                    contador.innerText = cantidad_maxima;
                }
            };
            actualizar_contador();
        }
    };
    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                elemento.target.classList.add("animar");
                elemento.target.classList.remove("ocultar");
                setTimeout(animarContadores, 400);
            }
        });
    };
    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.2,
    });
    const elementosHTML = document.querySelectorAll(".contador");
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML);
    });
});
const ul = document.getElementById("ul");
const body = document.getElementById("body");

let burger_nav = () => {
    let menu = document.querySelector(".menu-burger");
    //
    menu.addEventListener("click", () => {
        val();
        menu.classList.toggle(`toggle`);
    });
};

function val() {
    if (ul.classList.contains("show-menu")) {
        ul.classList.remove("show-menu");
        body.classList.remove("no-move");
    } else {
        ul.classList.add("show-menu");
        body.classList.add("no-move");
    }
}

//Marquee
(function() {
    const script = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    script.async = true;
    script.src = "https://api.adnan-tech.com/public/js/at.js";
    script.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(script, s0);

    script.onload = function() {
        at.loadMarquee(
            "#marquee",
            `Contactá y te asesoramos ➡ Presupuestá tu proyecto ➡ Reunite con nosotros  ➡  <i class="fa-solid fa-user-shield"> </i>`, {
                duration: 9, // seconds
                direction: "rtl", //ltr or rtl
            }
        );
    };
})();
init();