const colorInput = document.getElementById("color-input");
const rgbResult = document.querySelector(".rgb-result");
const copyButton = document.querySelector(".button-copy");
copyButton.onclick = function () {
  navigator.clipboard.writeText(rgbResult.innerHTML);
};

colorInput.addEventListener("input", () => {
  // remove space before and after string
  let value = colorInput.value.trim();
  // https://stackoverflow.com/questions/3286874/remove-all-multiple-spaces-in-javascript-and-replace-with-single-space
  value = value.replace(/ +(?= )/g, "");

  // SPLITTED BY COMMA
  // make array of strings from value, which are separated by comma
  let arraySplittedByComma = value.split(",");
  // remove non digit characters from all items - https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
  // https://stackoverflow.com/questions/12482961/change-values-in-array-when-doing-foreach
  arraySplittedByComma.forEach((item, index, theArray) => {
    theArray[index] = theArray[index].replace(/\D/g, "");
  });
  // remove items with empty string or one space
  function isNotEmptyStringNorOneSpace(val) {
    return !(val.length === 0 || val === " ");
  }
  arraySplittedByComma = arraySplittedByComma.filter(
    isNotEmptyStringNorOneSpace
  );
  // remove items with not valid code number (must be 0 - 255)
  function isNotValidCodeNumber(val) {
    return !(val < 0 || val > 255);
  }
  arraySplittedByComma = arraySplittedByComma.filter(isNotValidCodeNumber);
  // console.log(arraySplittedByComma);

  // SPLITTED BY SPACE
  let arraySplittedBySpace = value.split(" ");
  // remove non digit characters from all items - https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
  // https://stackoverflow.com/questions/12482961/change-values-in-array-when-doing-foreach
  arraySplittedBySpace.forEach((item, index, theArray) => {
    theArray[index] = theArray[index].replace(/\D/g, "");
  });
  // remove items with empty string or one space
  arraySplittedBySpace = arraySplittedBySpace.filter(
    isNotEmptyStringNorOneSpace
  );
  // remove items with not valid code number (must be 0 - 255)
  arraySplittedBySpace = arraySplittedBySpace.filter(isNotValidCodeNumber);
  // console.log(arraySplittedBySpace);

  // Choosing the array
  let resultArray = null;
  if (arraySplittedByComma.length === 3) {
    resultArray = arraySplittedByComma;
  } else if (arraySplittedBySpace.length === 3) {
    resultArray = arraySplittedBySpace;
  }
  // console.log(resultArray);
  if (resultArray) {
    // destructing result array
    const [r, g, b] = resultArray;
    const rgbString = `rgb(${r}, ${g}, ${b})`;
    rgbResult.innerHTML = rgbString;
    copyButton.style.display = "inline-block";
  } else {
    rgbResult.innerHTML = "";
    copyButton.style.display = "none";
  }

  // -----------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------
  // make array of strings from value, which are separated by space
  // const arraySplittedBySpace = value.split(" ");
  if (arraySplittedByComma.length === 3) {
    resultArray = arraySplittedByComma;
  } else if (arraySplittedBySpace.length === 3) {
    resultArray = arraySplittedBySpace;
  }
  let resultArrayClean = null;
  if (resultArray) {
    resultArray.forEach((element) => {
      element = element.trim();
    });
    resultArrayClean = resultArray.map((item) => item.replace(/\D/g, ""));
    let validColors =
      resultArrayClean[0] &&
      resultArrayClean[1] &&
      resultArrayClean[2] &&
      resultArrayClean[0] <= 255 &&
      resultArrayClean[1] <= 255 &&
      resultArrayClean[2] <= 255;
    if (validColors) {
      // alert("OK");
    }
  }
  // console.log(resultArrayClean);

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
