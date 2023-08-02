const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".imgslide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Call sliderNav function initially with a default value
sliderNav(0);

let countDate = new Date('August 4, 2023 00:00:00').getTime();
function CountDown() {

let now = new Date().getTime();
let gap = countDate - now; // Added "let" before gap

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24; // Changed hour * 60 to hour * 24

let d = Math.floor(gap / day);
let h = Math.floor((gap % day) / hour); // Changed hour * 60 to hour
let m = Math.floor((gap % hour) / minute); // Changed hour * 60 to hour
let s = Math.floor((gap % minute) / second); // Changed hour * 60 to hour

document.getElementById('day').innerText = d;
document.getElementById('hour').innerText = h;
document.getElementById('minute').innerText = m;
document.getElementById('second').innerText = s;

setTimeout(CountDown, 1000); // Changed setInterval to setTimeout
}

CountDown(); 

