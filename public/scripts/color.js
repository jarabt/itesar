const colorInput = document.getElementById("color-input");
const rgbResult = document.querySelector(".rgb-result");
const copyButtonRgb = document.querySelector(".button-copy-rgb");
const hexResult = document.querySelector(".hex-result");
const copyButtonHex = document.querySelector(".button-copy-hex");
const hexResult2 = document.querySelector(".hex-result2");
const copyButtonHex2 = document.querySelector(".button-copy-hex2");
const brushStroke = document.querySelector(".brush-stroke");

copyButtonRgb.onclick = function () {
  navigator.clipboard.writeText(rgbResult.innerHTML);
};
copyButtonHex.onclick = function () {
  navigator.clipboard.writeText(hexResult.innerHTML);
};
copyButtonHex2.onclick = function () {
  navigator.clipboard.writeText(hexResult2.innerHTML);
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
  // to Hex function
  function toHex(n) {
    let hex = n.toString(16);
    while (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }

  if (resultArray) {
    // destructing result array
    const [r, g, b] = resultArray;
    const rgbString = `rgb(${r}, ${g}, ${b})`;
    const hexString = `#${toHex(Number(r))}${toHex(Number(g))}${toHex(
      Number(b)
    )}`;
    const hexString2 = hexString.substring(1);
    rgbResult.innerHTML = rgbString;
    hexResult.innerHTML = hexString;
    hexResult2.innerHTML = hexString2;
    copyButtonRgb.style.display = "inline-block";
    copyButtonHex.style.display = "inline-block";
    copyButtonHex2.style.display = "inline-block";
    brushStroke.style.backgroundColor = rgbString;
    brushStroke.style.display = "block";
  } else {
    rgbResult.innerHTML = "";
    hexResult.innerHTML = "";
    hexResult2.innerHTML = "";
    copyButtonRgb.style.display = "none";
    copyButtonHex.style.display = "none";
    copyButtonHex2.style.display = "none";
    brushStroke.style.display = "none";
  }
});
