/* // import Swiper JS
import Swiper from "swiper";
// import Swiper styles
// import "swiper/css"; */

function initApp() {
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
  if (typeof AOS === "object" && typeof AOS.init === "function") {
    AOS.init();
  }

  if (typeof Swiper === "function") {
    const swiperCont = document.querySelector(".swiper") as HTMLDivElement;
    if (!swiperCont) {
      return;
    }
    /*     console.log("przechodzi");
    const swiper = new Swiper(swiperCont, {
      direction: "horizontal",
      loop: true,
    }); */
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
    console.dir(swiper);
  }
}

window.addEventListener("DOMContentLoaded", initApp);
