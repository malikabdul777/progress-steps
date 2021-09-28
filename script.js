const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

// console.log(circles);
let activeCircle = 1;

next.addEventListener("click", () => {
  if (activeCircle < circles.length) {
    activeCircle++;
  } else {
    activeCircle = circles.length;
  }
  // console.log(activeCircle);
  update();
});

prev.addEventListener("click", () => {
  if (activeCircle > 1) {
    activeCircle--;
  } else {
    activeCircle = 1;
  }
  update();
});

function update() {
  circles.forEach((el, i) => {
    if (i < activeCircle) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  const active = document.querySelectorAll(".active");
  // console.log(active);
  progress.style.width =
    ((active.length - 1) / (circles.length - 1)) * 100 + "%";

  if (activeCircle === 1) {
    prev.disabled = true;
  } else if (activeCircle === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
