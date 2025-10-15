const banner = document.querySelector(".cookie-banner");
const acceptBtn = document.querySelector(".accept-btn");
const rejectBtn = document.querySelector(".reject-btn");

// Check if consent already given
if (localStorage.getItem("cookieConsent")) {
  banner.style.display = "none";
  const consent = localStorage.getItem("cookieConsent");
  if (consent === "accepted") {
    alert("Díky za souhlas! Můžeš si teď užít plnou funkcionalitu webu.");
    gtag("consent", "update", {
      analytics_storage: "granted",
    });
  } else {
    gtag("consent", "update", {
      analytics_storage: "denied",
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
  gtag("consent", "update", {
    analytics_storage: "denied",
  });
  localStorage.setItem("cookieConsent", "rejected");
  banner.style.display = "none";
};
