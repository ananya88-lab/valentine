let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide++;
  slides[currentSlide].classList.add("active");
}

function moveBtn() {
  const btn = document.getElementById("angryBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function finalYes() {
  document.getElementById("finalText").innerHTML =
    "YAYYYY 😍❤️ I love you so much Nazeer. Always you. Forever us ♾️";
}
