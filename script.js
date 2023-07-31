const navigationBar = document.querySelectorAll("nav .navigation-bar li");
const contactMe = document.querySelector(".contact-cta a");
const contactMeWrap = document.querySelector(".contact-cta");
const toggleMenu = document.querySelector(".menu-toggle");
const toggleSpan = document.querySelectorAll(".menu-toggle span");
const navigationList = document.querySelector("nav .navigation-bar");
const header = document.querySelector(".navigations nav");
const hand = document.querySelector(".hand");
const parallax_el = document.querySelectorAll(".parallax");
const mainHero = document.querySelector(".hero .content");
const navUl = document.querySelector(".navigations nav ul");
const h4Name = document.querySelector(".hero .text h4");
const h4Span = document.querySelector(".hero .text h1 span");
const navLi = document.querySelectorAll(".navigation-bar li a");
const nameSpan = document.querySelector(".hero .text h4");

let xValue = 0;
let yValue = 0;
let rotateDeg = 0;

function updateParallax(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let leftValue = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * leftValue * 0.1;
    console.log(yValue);
    if (yValue <= 270) {
      el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    } else {
      el.style.transform = `translateX(calc(-50% + ${xValue * 0}px)) translateY(calc(-50% + ${yValue * 0}px))`;
    }
  });
}

updateParallax(0);

function mouseZoom(el) {
  el.addEventListener("mouseover", () => {
    hand.classList.add("hand-hover");
  });
  el.addEventListener("mouseleave", () => {
    hand.classList.remove("hand-hover");
  });
}

navLi.forEach((el) => {
  mouseZoom(el);
});
mouseZoom(h4Span);
mouseZoom(h4Name);

nameSpan.addEventListener("mouseover", () => {
  nameSpan.innerHTML = "Bima Wadafi Firmansyah";
  nameSpan.style.background = "linear-gradient(0deg, rgba(250, 114, 104, 1) 52%, rgba(124, 120, 255, 1) 100%);";
  nameSpan.style.transform = "scale(1.5)";
  nameSpan.addEventListener("mouseleave", () => {
    nameSpan.innerHTML = "Hello, My Name is <span>Bima</span>";
    nameSpan.style.transform = "scale(1)";
    nameSpan.style.padding = "0px";
  });
});

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;
  updateParallax(e.clientX);
});

if (window.innerWidth >= 725) {
  mainHero.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
  mainHero.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("navigations-sticky");
  } else {
    header.classList.remove("navigations-sticky");
  }
});

window.addEventListener("mousemove", (e) => {
  let xValue = e.pageX;
  let yValue = e.pageY;
  hand.style.top = `${yValue}px`;
  hand.style.left = `${xValue}px`;
});

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active-bg");
  navigationList.classList.toggle("slide");
  contactMeWrap.classList.toggle("active-contact");
  navUl.classList.toggle("ul-active");
});

navigationBar.forEach((navList) => {
  navList.addEventListener("mousemove", (e) => {
    const position = navList.getBoundingClientRect();
    let x = e.clientX - position.left - position.width / 2;
    let y = e.clientY - position.top - position.height / 2;
    navList.style.transform = `translate(${x * 0.5}px, ${y * 0.3}px)`;
    navList.addEventListener("mouseleave", () => {
      navList.style.transform = `translate(${x * 0}px, ${y * 0}px)`;
    });
  });
});

contactMe.addEventListener("mousemove", (e) => {
  const position = contactMe.getBoundingClientRect();
  let x = e.clientX - position.left - position.width / 2;
  let y = e.clientY - position.top - position.height / 2;
  contactMe.style.transform = `translate(${x * 0.6}px, ${y * 0.4}px)`;
  contactMe.addEventListener("mouseleave", () => {
    contactMe.style.transform = `translate(${x * 0}px, ${y * 0}px)`;
  });
});

toggleMenu.addEventListener("mousemove", (e) => {
  const position = toggleMenu.getBoundingClientRect();
  let x = e.clientX - position.left - position.width / 2;
  let y = e.clientY - position.top - position.height / 2;
  toggleMenu.style.transform = `translate(${x * 0.6}px, ${y * 0.4}px)`;
  toggleMenu.addEventListener("mouseleave", () => {
    toggleMenu.style.transform = `translate(${x * 0}px, ${y * 0}px)`;
  });
});

contactMeWrap.addEventListener("mousemove", (e) => {
  const position = contactMeWrap.getBoundingClientRect();
  let x = e.clientX - position.left - position.width / 2;
  let y = e.clientY - position.top - position.height / 2;
  contactMeWrap.style.transform = `translate(${x * 0.5}px, ${y * 0.3}px)`;
  contactMeWrap.addEventListener("mouseleave", () => {
    contactMeWrap.style.transform = `translate(${x * 0}px, ${y * 0}px)`;
  });
});
