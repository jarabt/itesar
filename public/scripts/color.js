const colorInput = document.getElementById("color");
const redSpan = document.querySelector(".red");
const greenSpan = document.querySelector(".green");
const blueSpan = document.querySelector(".blue");

const testSpan = document.querySelector(".test");

colorInput.addEventListener("input", () => {
  const value = colorInput.value.trim();
  let resultArray = null;
  const arraySplittedByComma = value.split(",");
  const arraySplittedBySpace = value.split(" ");
  if (arraySplittedByComma.length === 3) {
    resultArray = arraySplittedByComma;
  } else if (arraySplittedBySpace.length === 3) {
    resultArray = arraySplittedBySpace;
  }
  let resultArrayClean = null;
  if (resultArray) {
    resultArrayClean = resultArray.map((item) => item.replace(/\D/g, ""));
  }
  console.log(resultArrayClean);

  //   const arrayReplaced = arrayFromSplitted.map((item) =>
  //     item.replace(/\D/g, "")
  //   );
  //   console.log(arrayReplaced);

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
