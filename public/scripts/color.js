const colorInput = document.getElementById("color");
colorInput.addEventListener("input", () => {
  const value = colorInput.value;
  const arrayFromSplitted = value.split(",");
});
