const colorInput = document.getElementById("color");
const redSpan = document.querySelector(".red");
const greenSpan = document.querySelector(".green");
const blueSpan = document.querySelector(".blue");

colorInput.addEventListener("input", () => {
  const value = colorInput.value;
  const arrayFromSplitted = value.split(",");
  if (arrayFromSplitted.length === 3) {
    const [r, g, b] = arrayFromSplitted;
    redSpan.innerHTML = r;
    greenSpan.innerHTML = g;
    blueSpan.innerHTML = b;
  }
});
