const button = document.querySelector(".button-darkmode");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    // ...then use the .dark-theme class
    document.body.classList.add("dark-theme");
    button.innerHTML=" <img  src=\'/lightmode.svg\' width=\'16px\' />"
  }
button.addEventListener("click", function() {
    // Toggle the .dark-theme class on each click
    document.body.classList.toggle("dark-theme");
    // Let's say the theme is equal to light
    // If the body contains the .dark-theme class...
    if (document.body.classList.contains("dark-theme")) {
      // ...then let's make the theme dark
      theme = "dark";
    button.innerHTML=" <img  src=\'/lightmode.svg\' width=\'16px\' />"
    }
    else {
    theme="light"
    button.innerHTML=" <img  src=\'/dark_mode_black_24dp.svg\' width=\'16px\' />"
    }
    // Then save the choice in localStorage
    localStorage.setItem("theme", theme);
  });