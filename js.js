document.addEventListener("DOMContentLoaded", function () {
  const themeButtons = document.querySelectorAll(".theme-btn");
  const bgwave = document.querySelector(".bgwave");
  const serviceCards = document.querySelectorAll(".service-card");
  const serviceIcons = document.querySelectorAll(".service-icon");

  const colors = {
    yellow: "#ffff00b2",
    green: "#1a9b74b4",
    blue: "#0000ff65",
    pink: "#00f7ff9f",
  };

  const savedTheme = localStorage.getItem("siteTheme") || "green";
  applyTheme(savedTheme);

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const color = this.dataset.color;
      localStorage.setItem("siteTheme", color);
      applyTheme(color);
    });
  });

  function applyTheme(color) {
    const themeColor = colors[color];
    bgwave.style.fill = themeColor;
    serviceCards.forEach((card) => {
      card.style.backgroundColor = themeColor;
      
    });
    serviceIcons.forEach((icon) => {
      icon.style.color = themeColor;
      
    });
  }
});

// 26