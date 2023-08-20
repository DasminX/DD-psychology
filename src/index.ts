/* // import Swiper JS
import Swiper from "swiper";
// import Swiper styles
// import "swiper/css"; */

/*   const presentationals = Array.from(
  document.querySelectorAll("p[class*='__presentation__']")
) as HTMLParagraphElement[];
if (Array.isArray(presentationals) && presentationals.length > 0) {
  for (let i = 0; i < presentationals.length; i++) {
    presentationals[i].dataset.aos = "fade-right";
    presentationals[i].dataset.aosDuration = "550";
    presentationals[i].classList.add("aos-init");
  }
} */

function initApp() {
  initAos();
  initSwiper();
  initNavigation();

  function initAos() {
    try {
      if (typeof AOS === "object" && typeof AOS.init === "function") {
        AOS.init();
      }
    } catch (e) {}
  }

  function initSwiper() {
    try {
      if (typeof Swiper === "function") {
        const swiperCont = document.querySelector(".swiper") as unknown as HTMLDivElement;
        if (!swiperCont) return;

        const swiper = new Swiper(".swiper", {
          speed: 600,
          spaceBetween: 48,
          loop: true,
          centeredSlides: true,
          touchStartForcePreventDefault: true,
          setWrapperSize: true,
          autoplay: {
            delay: 3000,
          },
        });
      }
    } catch (e) {}
  }

  function initNavigation() {
    const nav = document.querySelector(".nav") as unknown as HTMLElement;
    const navToggle = document.querySelector(".nav__toggle") as unknown as HTMLDivElement;
    const navList = document.querySelector(".nav__list") as unknown as HTMLUListElement;
    if (!nav || !navToggle || !navList) return; // set desktop view
    highlightNavLink();

    function highlightNavLink() {
      try {
        const { pathname } = location;
        const idSelector = pathname.slice(1).trim() || "home";
        const cont = navList.querySelector(`#navitem-${idSelector}`);
        if (!cont) return;
        cont.classList.add("current-tab");
      } catch (e) {
        console.warn(e);
      }
    }

    function changeNavColor() {
      if (nav.classList.contains("nav__active")) {
        nav.classList.add("scrolled");
        return;
      }
      if (nav.classList.contains("scrolled")) {
        if (window.scrollY > window.outerHeight / 10) return;
        nav.classList.remove("scrolled");
      } else {
        if (window.scrollY <= window.outerHeight / 10) return;
        nav.classList.add("scrolled");
      }
    }

    navToggle.addEventListener("click", (e: Event) => {
      if (nav.classList.contains("nav__active")) {
        nav.classList.remove("nav__active");
      } else {
        nav.classList.add("nav__active");
      }

      changeNavColor();
    });

    navList.addEventListener("click", (e) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest("li")) return;

      highlightNavLink();

      nav.classList.remove("nav__active");
    });

    window.addEventListener("scroll", changeNavColor);
  }
}

window.addEventListener("DOMContentLoaded", initApp);
