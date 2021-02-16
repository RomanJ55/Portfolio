// initializie and setup the AoS library
AOS.init({
  delay: 200,
  duration: 1000,
  once: false,
});

// this is the fading h1
const h1 = document.querySelector(".hero span");
const h1Text = h1.textContent;
const h1Split = h1Text.split("");
h1.textContent = "";

for (let i = 0; i < h1Split.length; i++) {
  h1.innerHTML += "<span>" + h1Split[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 80);

function onTick() {
  const span = h1.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;

  if (char === h1Split.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// hamburger menu
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".mobile-nav");
const navigationItems = document.querySelectorAll(".mobile-nav li");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();

  menuButton.style.display = "none";
  navigation.style.display = "block";
});

navigationItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    navigation.style.display = "none";
    menuButton.style.display = "block";
  });
});
