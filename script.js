AOS.init({
  delay: 200,
  duration: 1000,
  once: false,
});

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
