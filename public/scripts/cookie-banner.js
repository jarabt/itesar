const banner = document.querySelector(".cookie-banner");
const acceptBtn = document.querySelector(".accept-btn");
const rejectBtn = document.querySelector(".reject-btn");

// Check if consent already given
if (localStorage.getItem("cookieConsent")) {
  banner.style.display = "none";
  const consent = localStorage.getItem("cookieConsent");
  if (consent === "accepted") {
    gtag("consent", "update", {
      analytics_storage: "granted",
    });
  }
}

acceptBtn.onclick = function () {
  // Grant analytics consent
  gtag("consent", "update", {
    analytics_storage: "granted",
  });
  localStorage.setItem("cookieConsent", "accepted");
  banner.style.display = "none";
};

rejectBtn.onclick = function () {
  // Keep cookies denied
  localStorage.setItem("cookieConsent", "rejected");
  banner.style.display = "none";
};
