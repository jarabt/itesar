const rgbResultSpan = document.querySelector(".rgb-result");
const copyButton = document.querySelector(".button-copy");

copyButton.onclick = function () {
  navigator.clipboard.writeText(rgbResultSpan.innerHTML);
};
