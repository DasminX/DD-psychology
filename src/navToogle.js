/* do zrefactorowania */
/* 
const homeLink = document.getElementById("mainContainer"); //przyciski navigacji w małych rozdzielczościach
const aboutLink = document.getElementById("aboutDDP");
const forWhomLink = document.getElementById("forWhom");
const opinionsLink = document.getElementById("opinions");
const contactLink = document.getElementById("contact");

const navLinks = [...document.querySelectorAll(".nav__link")]; // wszystkie linki w nawigacji - jako tablica
const mainPosition = document.querySelector("#mainContainer").offsetTop; // górna krawędź sekcji home
const aboutPosition = document.querySelector(".aboutDDP").offsetTop; // górna krawędź sekcji about
const forWhomPosition = document.querySelector(".forWhom").offsetTop; // górna krawędź sekcji projects
const opinionsPosition = document.querySelector(".opinions").offsetTop; // górna krawędź sekcji projects
const contactPosition = document.querySelector(".contact").offsetTop; // górna krawędź sekcji contact
const goUpButton = document.querySelector(".footer__go-up"); // button zabierający na początek strony
console.log("wchodzi");

const colorNavChange = () => {
  // funkcja dająca kolor linkom w nawigacji zależnie od miejsca w którym jesteśmy na stronie
  const topPosition = window.scrollY; // na jakiej wysokości obecnie jest krawędź górnego ekranu
  const navHeight = document.querySelector(".nav__bar").clientHeight; // wysokość nav baru
  if (topPosition <= aboutPosition - navHeight) {
    // jeżeli górna krawędź ekranu jest między górą dokumentu a miejscem w którym się zaczyna sekcja about (minus wysokość navbaru)
    colorNavRemove(); // przed każdym nadaniem koloru danemu linkowi, zerujemy wszystkie linki, aby nie było dwóch naraz
    homeLink.classList.add("nav__link--color");
  } else if (topPosition <= forWhomPosition - navHeight) {
    colorNavRemove();
    aboutLink.classList.add("nav__link--color");
  } else if (topPosition <= opinionsPosition - navHeight) {
    colorNavRemove();
    forWhomLink.classList.add("nav__link--color");
  } else if (topPosition <= contactPosition - navHeight) {
    colorNavRemove();
    opinionsLink.classList.add("nav__link--color");
  } else {
    colorNavRemove();
    contactLink.classList.add("nav__link--color");
  }
};
document.addEventListener("scroll", colorNavChange);





const colorNavRemove = () => {
  //funkcja zabierająca jasny kolor z linków w navigacji na małych rozdzielczościach
  homeLink.classList.remove("nav__link--color");
  aboutLink.classList.remove("nav__link--color");
  projectsLink.classList.remove("nav__link--color");
  contactLink.classList.remove("nav__link--color");
};

goUpButton.addEventListener("click", () => {
  //funkcja scrollująca do projektów po naciśnięciu buttona - strzałka do góry
  const scrollTo = window.setInterval(function () {
    window.scrollTo(0, homePosition - 20);
    window.clearInterval(scrollTo);
  }, 6);
});
 */
