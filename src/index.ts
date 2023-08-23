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
  initBtnShowInfo();

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
          speed: 800,
          spaceBetween: 48,
          loop: true,
          centeredSlides: true,
          touchStartForcePreventDefault: true,
          setWrapperSize: true,
          autoplay: {
            delay: 5000,
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
        const idSelector = pathname.slice(1).trim().replace(/[/#]/gi, "") || "home";
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

      nav.classList.remove("nav__active");
    });

    window.addEventListener("scroll", changeNavColor);
  }

  function initBtnShowInfo() {
    console.log("ddd");
    const contactSection = document.querySelector("#contact");
    if (!contactSection) return;

    contactSection.addEventListener("click", (e) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.classList.contains("contact-btn")) return;

      const closestSquare = e.target.closest(".contact__square__info");
      if (!closestSquare) return;

      e.target.classList.add("contact-btn-hidden");

      const phone1 = closestSquare.querySelector(".phone-number1");
      if (phone1) {
        phone1.innerHTML = "+48 789 049 495";
      }

      const phone2 = closestSquare.querySelector(".phone-number2");
      if (phone2) {
        phone2.innerHTML = "+48 570 190 884";
      }

      const email = closestSquare.querySelector(".email-address");
      if (email) {
        email.innerHTML = "dd.bezpiecznaprzystan@gmail.com";
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", initApp);
