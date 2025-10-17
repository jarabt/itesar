const colorInput = document.getElementById("color");
const redSpan = document.querySelector(".red");
const greenSpan = document.querySelector(".green");
const blueSpan = document.querySelector(".blue");

const testSpan = document.querySelector(".test");

colorInput.addEventListener("input", () => {
  const arrayFromSplitted = colorInput.value.split(",");
  console.log(arrayFromSplitted);
  const arrayReplaced = arrayFromSplitted.map((item) =>
    item.replace(/\D/g, "")
  );
  console.log(arrayReplaced);

  //   const value = colorInput.value.replace(/\D/g, "");
  //   testSpan.innerHTML = value.trim();

  //   if (arrayFromSplitted.length === 3) {
  //     const [r, g, b] = arrayFromSplitted;
  //     redSpan.innerHTML = r;
  //     greenSpan.innerHTML = g;
  //     blueSpan.innerHTML = b;
  //   } else {
  //     alert(arrayFromSplitted.length);
  //   }
});
