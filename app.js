const button = document.querySelector(".button-darkmode");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    button.innerHTML=" <img  src=\'/lightmode.svg\' width=\'16px\' />"
  }
button.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    button.innerHTML=" <img  src=\'/lightmode.svg\' width=\'16px\' />"
    }
    else {
    theme="light"
    button.innerHTML=" <img  src=\'/dark_mode_black_24dp.svg\' width=\'16px\' />"
    }
    localStorage.setItem("theme", theme);
  });