const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    const links = navMenu.querySelectorAll("a");

    links.forEach(link => {
        link.style.display = link.style.display === "block" ? "none" : "block";
    });
});
