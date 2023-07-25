function initApp() {
  const presentationals = Array.from(
    document.querySelectorAll("p[class*='__presentation__']")
  ) as HTMLParagraphElement[];
  if (Array.isArray(presentationals) && presentationals.length > 0) {
    for (let i = 0; i < presentationals.length; i++) {
      presentationals[i].dataset.aos = "fade-right";
      presentationals[i].dataset.aosDuration = "550";
      presentationals[i].classList.add("aos-init");
    }
  }
  if (typeof AOS === "object" && typeof AOS.init === "function") {
    AOS.init();
  }
}

window.addEventListener("DOMContentLoaded", initApp);
