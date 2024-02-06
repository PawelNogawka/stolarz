
  const burgerBtn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");
const links = document.querySelectorAll(".header__nav-link");
const header = document.querySelector(".header");


const sections = document.querySelectorAll(".section");


function handleNav() {
  nav.classList.toggle("header__nav--active");
console.log('ok')
  burgerBtn.classList.toggle("header__menu-btn--active");

  logo.classList.toggle("header__logo--active");

  logo.addEventListener("click", function () {
    nav.classList.remove("header__nav--active");
    logo.classList.remove("header__logo--active")
    burgerBtn.classList.remove("header__menu-btn--active")
  });
}

function handleHeader() {
  let top = window.scrollY;
  let isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

  if (!isHomePage) {
    // Jeśli nie jesteśmy na stronie głównej, zakończ funkcję
    return;
  }

  sections.forEach(function (section) {
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    let home = document.querySelector('.home');

    if (top >= offset - 72 && top < offset + height) {
      links.forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("header__nav--active");
          burgerBtn.classList.remove("header__menu-btn--active");
        });
        link.classList.remove("header__nav-link--active");
        document
          .querySelector(".header__nav-link[href*=" + id + "]")
          .classList.add("header__nav-link--active");
      });
    } else if (top <= home.offsetTop) {
      links.forEach(function (link) {
        link.classList.remove('header__nav-link--active');
      });
    }
  });

  header.classList.toggle("header--sticky", top > 0);
}

function animateCounter(element, endValue, duration) {
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);

    const currentCount = Math.floor(progress * endValue);
    element.textContent = currentCount;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateCounterIfVisible(element, endValue, duration) {
  let animationTriggered = false;

  const handleScroll = () => {
    if (!animationTriggered && isElementInViewport(element)) {
      animateCounter(element, endValue, duration);
      animationTriggered = true;
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Dodatkowe sprawdzenie przy załadowaniu strony
}

// Uzyskaj elementy liczników i ich wartości końcowe
const counterElements = document.querySelectorAll('.about__counter-ammount');
const endValues = [100, 150, 10, 10];

// Ustaw czas trwania animacji w milisekundach
const animationDuration = 3000;

// Uruchom animację dla każdego licznika, gdy staje się widoczny w oknie przeglądarki
counterElements.forEach((element, index) => {
  animateCounterIfVisible(element, endValues[index], animationDuration);
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter:true,
    disableOnInteraction:false
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});







window.addEventListener("scroll", handleHeader);
window.addEventListener('load',handleHeader)

burgerBtn.addEventListener("click", handleNav);


