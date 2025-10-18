const colorInput = document.getElementById("color-input");
const redSpan = document.querySelector(".red");
const greenSpan = document.querySelector(".green");
const blueSpan = document.querySelector(".blue");

const testSpan = document.querySelector(".test");

colorInput.addEventListener("input", () => {
  // remove space before and after string
  let value = colorInput.value.trim();
  // https://stackoverflow.com/questions/3286874/remove-all-multiple-spaces-in-javascript-and-replace-with-single-space
  value = value.replace(/ +(?= )/g, "");

  // Splitted by comma
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
  // console.log(arraySplittedByComma);

  // Splitted by space
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
  //console.log(arraySplittedBySpace);

  // Choosing the array
  let resultArray = null;
  if (arraySplittedByComma.length === 3) {
    resultArray = arraySplittedByComma;
  } else if (arraySplittedBySpace.length === 3) {
    resultArray = arraySplittedBySpace;
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
