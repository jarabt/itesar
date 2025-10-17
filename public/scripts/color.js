const colorInput = document.getElementById("color");
const redSpan = document.querySelector(".red");
const greenSpan = document.querySelector(".green");
const blueSpan = document.querySelector(".blue");

colorInput.addEventListener("input", () => {
  const value = colorInput.value.replace(/\D/g, " ");
  redSpan.innerHTML = value;
  //   const arrayFromSplitted = value.split(",");
  //   arrayFromSplitted.map();
  //   if (arrayFromSplitted.length === 3) {
  //     alert("ok");
  //     const [r, g, b] = arrayFromSplitted;
  //     redSpan.innerHTML = r;
  //     greenSpan.innerHTML = g;
  //     blueSpan.innerHTML = b;
  //   } else {
  //     redSpan.innerHTML = "not 3";
  //     alert("ok");
  //   }
});
