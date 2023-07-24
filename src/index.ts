function initApp() {
  if (typeof AOS === "object" && typeof AOS.init === "function") {
    AOS.init()
  }
}

window.addEventListener("DOMContentLoaded", initApp)
