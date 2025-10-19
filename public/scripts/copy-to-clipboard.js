function setClipboard(elementId) {
  const button = document.getElementById(elementId + "-button");
  const element = document.getElementById(elementId);
  const tooltip = new bootstrap.Tooltip(button, { trigger: "manual" });
  button.onclick = function () {
    navigator.clipboard.writeText(element.value).then(() => {
      button.setAttribute("data-bs-original-title", "Zkopírováno do schránky.");
      tooltip.show();
      setTimeout(() => {
        tooltip.hide();
      }, 1500);
    });
  };
}

const inputElements = [
  "last-name",
  "first-name",
  "tel",
  "birth-date",
  "insurance-company",
  "ssn",
  "insurance-company-code",
  "street",
  "municipal-part",
  "house-number",
  "orientation-number",
  "registration-number",
  "city",
  "postal-code",
  "medicine-name",
  "form",
  "strength",
  "packaging-size",
  "administration",
  // "atc-who",
  "code-sukl",
  "quantity",
  "reimbursement",
  "instructions",
];

inputElements.forEach(setClipboard);
