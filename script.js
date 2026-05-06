const themeSelect = document.getElementById("theme-select");
const footerLogo = document.getElementById("footer-logo");

themeSelect.addEventListener("change", function () {
    const theme = themeSelect.value;

    if (theme === "dark") {
        document.body.classList.add("dark");
        footerLogo.src = "your-dark-logo.png"; // white BYUI logo
    } else {
        document.body.classList.remove("dark");
        footerLogo.src = "your-light-logo.png"; // normal logo
    }
});
